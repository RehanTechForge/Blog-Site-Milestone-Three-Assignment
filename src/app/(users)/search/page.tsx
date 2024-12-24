import { Suspense } from "react";
import { getBlogsBySearch } from "@/lib/getBlogData";
import { SearchPageClient } from "./SearchPageClient";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { q: string };
}) {
  const query = searchParams.q || "";
  console.log("query", query);

  const searchResults = await getBlogsBySearch(query);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchPageClient initialBlogs={searchResults} initialQuery={query} />
    </Suspense>
  );
}
