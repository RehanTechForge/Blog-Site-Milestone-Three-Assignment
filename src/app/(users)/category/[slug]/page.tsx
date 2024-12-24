import { Suspense } from "react";
import { notFound } from "next/navigation";
import { getBlogsByCategory, getCategories } from "@/lib/getBlogData";
import CategoryPageClient from "./CategoryPageClient";
import LoadingSkeletonLayout from "@/components/ui/loadingSkeletonLayout";
export async function generateStaticParams() {
  const categories = await getCategories();

  return categories.map((category) => ({
    slug: category,
  }));
}

export default async function CategoryPage({ params }: any) {
  const slug = params.slug;
  if (!slug) {
    notFound();
  }

  // const decodedSlug = decodeURIComponent(slug);
  const blogs = await getBlogsByCategory(slug);

  if (!blogs.length) {
    notFound();
  }

  return (
    <Suspense fallback={<LoadingSkeletonLayout />}>
      <CategoryPageClient initialBlogs={blogs} category={slug} />
    </Suspense>
  );
}
