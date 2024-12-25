// export const revalidate = 3600;
import { fetchPostData, getBlogData } from "@/lib/getBlogData"; // Assuming this fetches the blog data from Sanity
import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CommentsSection from "@/components/BlogPage/Comments";
import { PortableText } from "@portabletext/react";
import { RelatedPostCard } from "@/components/Card/RelatedPostCard";
import { Button } from "@/components/ui/button";
import components from "@/components/ui/RichTextComponent";
interface ParamsInterFace {
  slug: string;
}

const Page = async ({ params }: { params: ParamsInterFace }) => {
  const { slug } = params;
  const post = await fetchPostData(slug);
  // Fetch all blog data from Sanity
  const blogs = await getBlogData();

  // Find the current blog based on the slug
  const blog = blogs.find((blog) => blog.slug.current === params.slug);

  // If no blog is found, return a 404 page or some default message
  if (!blog) {
    return <p>Blog not found</p>;
  }

  // Filter related posts (same category but different slug)
  const relatedPosts = blogs.filter(
    (relatedPost) =>
      relatedPost.category === blog.category &&
      relatedPost.slug.current !== blog.slug.current
  );

  return (
    <section className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="col-span-1 md:col-span-8 my-8">
          <div className="mb-4 flex justify-between">
            <p className="text-sm">By: {blog.author.name}</p>
            <p className="text-sm">
              Date: {new Date(blog._createdAt).toLocaleDateString()}
            </p>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2 text-primary">
            {blog.title}
          </h1>
          <p className="text-lg md:text-xl leading-relaxed my-8 border-l-2 border-primary pl-4">
            {blog.description || "No description available."}
          </p>
        </div>
        <div className="col-span-1 md:col-span-4 flex justify-center">
          {blog.image && (
            <Image
              src={blog.image}
              alt={blog.title}
              className="mt-4 w-full h-auto object-contain"
              height={300}
              width={400}
            />
          )}
        </div>
      </div>

      {/* Dynamically render the body content using PortableText*/}
      <div className="mt-6 prose prose-lg dark:prose-invert max-w-none">
        <PortableText value={blog.body} components={components} />
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
        <div>
          By:{" "}
          <Link href={`/authors/${blog.author.slug.current}`}>
            {blog.author.name}
          </Link>
        </div>
      </div>

      {relatedPosts.length > 0 ? (
        <section className="mt-12">
          <h2 className="text-3xl font-bold mb-6">Related Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost) => (
              <RelatedPostCard
                key={relatedPost.slug.current}
                slug={relatedPost.slug.current}
                image={relatedPost.image}
                title={relatedPost.title}
                description={
                  relatedPost.body[0]?.children[0]?.text ||
                  "No description available."
                }
              />
            ))}
          </div>
        </section>
      ) : (
        <section className="mt-12 flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl font-bold mb-4">No Related Posts Found</h2>
          <p className="text-lg text-muted-foreground mb-6">
            It seems we couldn't find any posts related to this topic.
          </p>
          <div className="relative w-48 h-48 mb-6">
            <Image
              src="/no-post.png"
              alt="No Posts Found"
              fill
              className="object-contain opacity-75"
            />
          </div>
          <Button asChild>
            <Link href="/">Go Back to Homepage</Link>
          </Button>
        </section>
      )}

      <CommentsSection
        postId={post._id}
      />
    </section>
  );
};

export default Page;
