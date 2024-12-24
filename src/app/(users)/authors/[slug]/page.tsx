import Image from "next/image";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { getAuthorBySlug, getAuthors } from "@/lib/getBlogData";
import components from "@/components/ui/RichTextComponent";

export async function generateStaticParams() {
  const authors = await getAuthors();
  return authors.map((author) => ({
    slug: author.slug,
  }));
}

export default async function AuthorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const author = await getAuthorBySlug(slug);

  if (!author) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Author Profile Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
        {/* Author Image */}
        <Image
          src={author.image}
          alt={author.name}
          width={200}
          height={200}
          className="rounded-full"
        />

        {/* Author Details */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold mb-2">{author.name}</h1>
          <p className="text-sm text-muted-foreground">
            {/* Placeholder for any additional info, like profession */}
            {author.profession || "Beauty Blogger & Skincare Advocate"}
          </p>
          <p>{author.description || "No Descripiton Provided"}</p>
        </div>
      </div>

      {/* Author Bio Section */}
      <div className="mt-6 prose prose-lg dark:prose-invert max-w-none">
        <PortableText value={author.body} components={components} />
      </div>
    </div>
  );
}
