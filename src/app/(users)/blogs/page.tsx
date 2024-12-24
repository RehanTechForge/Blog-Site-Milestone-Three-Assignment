// pages/blog.tsx
import { getBlogData } from "@/lib/getBlogData";
import BlogPageClient from "./BlogPageClient";

// This is the server-side function to fetch data
export default async function BlogPage() {
  const blogs = await getBlogData();

  return <BlogPageClient initialBlogs={blogs} />;
}
