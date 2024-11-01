import fs from "node:fs";
import matter from "gray-matter";
import path from "path";

export interface Blog {
  title: string;
  date: string;
  description: string;
  author: string;
  image: string;
  slug: string;
  category: string;
  categoryImage: string;
}

export function getBlogData(): Blog[] {
  const contentDirectory = path.join(process.cwd(), "src/content");
  const files = fs.readdirSync(contentDirectory);

  const blogs = files.map((file) => {
    const filePath = path.join(contentDirectory, file);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);
    return data as Blog;
  });

  return blogs;
}
