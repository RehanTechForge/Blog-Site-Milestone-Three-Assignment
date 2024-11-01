"use client";
import React, { useEffect, useState, ChangeEvent, FormEvent } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { MessageSquare, Send } from "lucide-react";
import { Separator } from "../ui/separator";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback } from "../ui/avatar";

// Define a type for the comment
interface Comment {
  author: string;
  text: string;
}

// Define the props type for the CommentsSection component
interface CommentsSectionProps {
  postSlug: string;
}

const CommentsSection: React.FC<CommentsSectionProps> = ({ postSlug }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentText, setCommentText] = useState<string>("");
  const [commentAuthor, setCommentAuthor] = useState<string>("");

  useEffect(() => {
    // Load comments from localStorage for the specific postSlug
    const savedComments = localStorage.getItem(`comments_${postSlug}`);
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    }
  }, [postSlug]);

  const handleCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCommentText(e.target.value);
  };

  const handleAuthorChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCommentAuthor(e.target.value);
  };

  const handleCommentSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (commentText.trim() && commentAuthor.trim()) {
      const newComment: Comment = { author: commentAuthor, text: commentText };
      const updatedComments = [...comments, newComment];

      // Save to localStorage for the specific postSlug
      localStorage.setItem(
        `comments_${postSlug}`,
        JSON.stringify(updatedComments)
      );

      setComments(updatedComments);
      setCommentText("");
      setCommentAuthor("");
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
          />
          <Textarea
            value={commentText}
            onChange={handleCommentChange}
            placeholder="Leave a comment..."
            className="min-h-[100px]"
          />
          <Button type="submit" className="w-full">
            <Send className="mr-2 h-4 w-4" /> Submit Comment
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col">
        <Separator className="my-4" />
        <div className="space-y-4 w-full">
          {comments.map((comment, index) => (
            <Card key={index} className="w-full">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarFallback>
                      {comment.author[0].toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <CardTitle>{comment.author}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{comment.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
};

export default CommentsSection;
