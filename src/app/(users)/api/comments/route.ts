import { NextRequest, NextResponse } from "next/server";
import { client } from "../../../../sanity/lib/client";

export async function POST(req: NextRequest) {
  const reqBody = await req.json();
  const { commentAuthor, commentText, post } = reqBody;

  try {
    const newComment = await client.create({
      _type: "comment",
      commentAuthor,
      commentText,
      post,
      publishedAt: new Date().toISOString(),
    });

    return NextResponse.json(newComment, { status: 200 });
  } catch (error) {
    console.error("Error creating comment:", error);
    return NextResponse.json(
      { error: "Failed to submit comment" },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const postId = url.searchParams.get("postId");

  if (!postId) {
    return NextResponse.json({ error: "Post ID is required" }, { status: 400 });
  }

  try {
    const comments = await client.fetch(
      `*[_type == "comment" && post._ref == $postId] | order(publishedAt desc)`,
      { postId }
    );
    return NextResponse.json({ comments }, { status: 200 });
  } catch (error) {
    console.error("Error fetching comments:", error);
    return NextResponse.json(
      { error: "Failed to fetch comments" },
      { status: 500 }
    );
  }
}
