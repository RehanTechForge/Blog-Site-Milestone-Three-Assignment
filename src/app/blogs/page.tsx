import { getBlogData } from "@/lib/getBlogData";
import BlogPageClient from "./BlogPageClient";

export default function BlogPage() {
  const blogs = getBlogData();

  return <BlogPageClient initialBlogs={blogs} />;
}
