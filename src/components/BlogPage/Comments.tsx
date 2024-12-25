"use client";
import React, { useEffect, useState, ChangeEvent, FormEvent } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { MessageSquare, Send, Loader2 } from "lucide-react";
import { Separator } from "../ui/separator";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Alert, AlertDescription } from "../ui/alert";

interface Comment {
  _id: string;
  commentAuthor: string;
  commentText: string;
}

interface CommentsSectionProps {
  postId: string;
}

const CommentsSection: React.FC<CommentsSectionProps> = ({ postId }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentText, setCommentText] = useState<string>("");
  const [commentAuthor, setCommentAuthor] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchComments();
  }, [postId]);

  const fetchComments = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/comments?postId=${postId}`);
      if (!res.ok) {
        throw new Error("Failed to fetch comments");
      }
      const data = await res.json();
      setComments(data.comments);
    } catch (error) {
      console.error("Error fetching comments:", error);
      setError("Failed to load comments. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCommentText(e.target.value);
  };

  const handleAuthorChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCommentAuthor(e.target.value);
  };

  const handleCommentSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!commentText.trim() || !commentAuthor.trim()) {
      alert("Both fields are required.");
      return;
    }

    setIsSubmitting(true);
    setError(null);

    const newComment = {
      commentAuthor,
      commentText,
      post: { _type: "reference", _ref: postId },
    };

    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newComment),
      });

      if (res.ok) {
        await fetchComments();
        setCommentText("");
        setCommentAuthor("");
      } else {
        throw new Error("Failed to submit comment.");
      }
    } catch (error) {
      console.error("Error submitting comment:", error);
      setError("Failed to submit comment. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto mt-8">
      <CardHeader>
        <CardTitle className="flex items-center text-2xl font-bold text-primary">
          <MessageSquare className="mr-2" />
          Comments
        </CardTitle>
        <Separator className="my-2" />
      </CardHeader>
      <CardContent>
        <form onSubmit={handleCommentSubmit} className="space-y-4">
          <Input
            type="text"
            value={commentAuthor}
            onChange={handleAuthorChange}
            placeholder="Your Name"
            disabled={isSubmitting}
          />
          <Textarea
            value={commentText}
            onChange={handleCommentChange}
            placeholder="Leave a comment..."
            className="min-h-[100px]"
            disabled={isSubmitting}
          />
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Send className="mr-2 h-4 w-4" />
            )}
            {isSubmitting ? "Submitting..." : "Submit Comment"}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col">
        <Separator className="my-4" />
        {error && (
          <Alert variant="destructive" className="mb-4">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        <div className="space-y-4 w-full">
          {isLoading ? (
            <div className="flex justify-center items-center h-24">
              <Loader2 className="h-8 w-8 animate-spin" />
            </div>
          ) : comments.length > 0 ? (
            comments.map((comment) => (
              <Card key={comment._id} className="w-full">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarFallback>
                        {comment.commentAuthor[0].toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <CardTitle>{comment.commentAuthor}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{comment.commentText}</p>
                </CardContent>
              </Card>
            ))
          ) : (
            <p className="text-center text-muted-foreground">
              No comments yet. Be the first to comment!
            </p>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default CommentsSection;
