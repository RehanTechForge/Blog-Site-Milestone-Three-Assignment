"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Search, Tag, TrendingUp } from "lucide-react";
import BlogCard from "@/components/Card/Card";
import { Blog } from "@/lib/getBlogData";
import Link from "next/link";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface BlogPageClientProps {
  initialBlogs: Blog[];
}

export default function BlogPageClient({ initialBlogs }: BlogPageClientProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 3; // Number of blogs per page
  const categories = [
    "All",
    ...new Set(initialBlogs.map((blog) => blog.category)),
  ];

  const filteredBlogs = initialBlogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "All" || blog.category === selectedCategory)
  );

  const totalPages = Math.ceil(filteredBlogs.length / pageSize);

  const paginatedBlogs = filteredBlogs.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const popularPosts = initialBlogs.slice(0, 3);

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <main className="md:col-span-9">
          <h2 className="text-3xl font-bold tracking-tight mb-6 flex items-center text-primary">
            <BookOpen className="mr-2" />
            Extensions Articles
          </h2>
          <section>
            {paginatedBlogs.map((blog, index) => (
              <BlogCard blog={blog} key={index} />
            ))}
          </section>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => handlePageChange(currentPage - 1)}
                  href="#"
                />
              </PaginationItem>
              {Array.from({ length: totalPages }, (_, i) => (
                <PaginationItem key={i}>
                  <PaginationLink
                    href="#"
                    onClick={() => handlePageChange(i + 1)}
                    className={currentPage === i + 1 ? "font-bold" : ""}
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext
                  onClick={() => handlePageChange(currentPage + 1)}
                  href="#"
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </main>
        <aside className="md:col-span-3 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Blog Filters</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="search"
                    className="text-sm font-medium mb-2 block"
                  >
                    Search Articles
                  </label>
                  <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="search"
                      placeholder="Search..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-8"
                    />
                  </div>
                </div>
                <Separator />
                <div>
                  <h3 className="text-sm font-medium mb-2 flex items-center">
                    <Tag className="mr-2 h-4 w-4" />
                    Categories
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <Badge
                        key={category}
                        variant={
                          selectedCategory === category
                            ? "default"
                            : "secondary"
                        }
                        className="cursor-pointer"
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="mr-2 h-4 w-4" />
                Popular Posts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {popularPosts.map((post, index) => (
                  <li key={index}>
                    <Link
                      href={`/blogs/${post.slug}`}
                      className="text-sm hover:underline"
                    >
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </aside>
      </div>
    </section>
  );
}
