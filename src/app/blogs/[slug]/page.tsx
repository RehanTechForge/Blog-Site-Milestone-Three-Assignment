import CommentsSection from "@/components/BlogPage/Comments";
import matter from "gray-matter";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import fs from "node:fs";
import React from "react";
import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import { getBlogData } from "@/lib/getBlogData";
const Page = async ({ params }: any) => {
  // Construct the file path based on the slug
  const filepath = `src/content/${params.slug}.md`;

  // Read the content of the Markdown file
  const fileContent = fs.readFileSync(filepath, "utf-8");

  // Use gray-matter to parse the content and frontmatter
  const { content, data } = matter(fileContent);

  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeDocument, { title: "👋🌍" })
    .use(rehypeFormat)
    .use(rehypeStringify);

  const htmlContent = (await processor.process(content)).toString();
  const blogs = getBlogData();

  // Filter blogs to only include those with the same category as the current post
  const relatedPosts = blogs.filter(
    (blogItem) =>
      blogItem.category === data.category && blogItem.slug !== data.slug
  );

  return (
    <section className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="col-span-1 md:col-span-8 my-8">
          <div className="mb-4 flex justify-between">
            <p className="text-sm">By: {data.author}</p>
            <p className="text-sm">Date: {data.date}</p>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2 text-primary">
            {data.title}
          </h1>
          <p className="text-lg md:text-xl leading-relaxed my-8 border-l-2 border-primary pl-4">
            &quot;{data.description}&quot;
          </p>
        </div>
        <div className="col-span-1 md:col-span-4 flex justify-center">
          {data.image && (
            <Image
              src={data.image}
              alt={data.title}
              className="mt-4 w-full h-auto object-contain" // Changed width to full for responsiveness
              height={300}
              width={400}
            />
          )}
        </div>
      </div>
      <div className="mt-6 prose max-w-[100vw]">
        {/* Render the content of the Markdown file */}
        <div
          dangerouslySetInnerHTML={{ __html: htmlContent }}
          className="prose dark:prose-invert max-w-[100vw]"
        />
      </div>
      <div className="flex justify-between my-6">
        <div className="flex gap-4">
          <span>Share it:</span>
          <span className=" text-primary">
            <Link href="https://twitter.com">
              <Twitter />
            </Link>
          </span>
          <span className=" text-primary">
            <Link href="https://facebook.com">
              <Facebook />
            </Link>
          </span>
          <span className=" text-primary">
            <Link href="https://instagram.com">
              <Instagram />
            </Link>
          </span>
        </div>
        <div>By: {data.author}</div>
      </div>

      <div>
        {/* Related Posts Section */}
        {relatedPosts.length > 0 && (
          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Related Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedPosts.map((relatedPost) => (
                <div
                  key={relatedPost.slug}
                  className="border border-gray-300 p-4 rounded-md shadow-sm transition hover:shadow-lg"
                  style={{ backgroundColor: "transparent", color: "inherit" }}
                >
                  {/* Image for each related post */}
                  <div className="relative w-full h-40 mb-2">
                    <Image
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-md"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {relatedPost.title}
                  </h3>
                  <p className="text-sm mb-4">{relatedPost.description}</p>
                  <Link
                    href={`/blogs/${relatedPost.slug}`}
                    className="text-blue-500 hover:underline"
                  >
                    Read More
                  </Link>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
      {/* Add Comments Section */}
      <CommentsSection postSlug={data.slug} />
    </section>
  );
};

export default Page;
