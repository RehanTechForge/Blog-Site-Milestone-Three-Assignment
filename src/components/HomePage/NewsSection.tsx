"use client";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Clock, Info, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Blog, getBlogData } from "@/lib/getBlogData";
import { Skeleton } from "../ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";

export default function ModernNewsSection() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [uniqueCategories, setUniqueCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await getBlogData();
        setBlogs(data);

        // Fetch unique categories from the fetched blogs
        const categories = [
          "All",
          ...new Set(data.map((blog) => blog.category)),
        ];
        setUniqueCategories(categories);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      } finally {
        setLoading(false); // Set loading to false once data is fetched
      }
    };

    fetchBlogs();
  }, []);

  // Show loading state while data is being fetched
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-64">
        <Skeleton className="h-8 w-32 mb-4" />
        <Skeleton className="h-6 w-64 mb-2" />
        <Skeleton className="h-6 w-48" />
      </div>
    );
  }

  // Show message if no blogs are available
  if (blogs.length === 0) {
    return (
      <Alert className="flex flex-col items-center justify-center h-64">
        <Info className="w-6 h-6 text-blue-500 mb-2" />
        <AlertTitle className="text-lg font-semibold">
          No Blogs Found
        </AlertTitle>
        <AlertDescription className="text-gray-600">
          Please check back later for more updates.
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <section className="w-full max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">
        Today's Top Stories
      </h2>

      <Tabs defaultValue="All" className="mb-8">
        <TabsList className="flex-col h-48 sm:h-9 text-center sm:flex-row">
          {uniqueCategories.map((category) => (
            <TabsTrigger key={category} value={category}>
              {category}
            </TabsTrigger>
          ))}
        </TabsList>

        {uniqueCategories.map((category) => (
          <TabsContent key={category} value={category} className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {blogs
                .slice() // Clone array to avoid modifying the original with reverse
                .reverse()
                .filter(
                  (blog) => category === "All" || blog.category === category
                )
                .map((blog, index) => (
                  <Card key={index} className="overflow-hidden">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      width={300}
                      height={200}
                      className="w-full h-2/4 object-cover"
                    />
                    <CardContent className="p-4">
                      <Badge className="mb-2">{blog.category}</Badge>
                      <CardTitle className="text-lg mb-2">
                        {blog.title}
                      </CardTitle>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {new Intl.DateTimeFormat("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }).format(new Date(blog._createdAt))}
                      </div>
                      <div className="line-clamp-2 my-4">
                        {blog.description}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link
                        href={`/blogs/${blog.slug.current}`}
                        className={buttonVariants({ variant: "outline" })}
                      >
                        Click here
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      {/* <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <TrendingUp className="w-5 h-5 text-pink-500" />
          <span className="font-semibold">Trending Topics:</span>
          <Badge
            variant="outline"
            className="bg-pink-100 text-pink-800 border-pink-300"
          >
            Fall Makeup Trends
          </Badge>
          <Badge
            variant="outline"
            className="bg-purple-100 text-purple-800 border-purple-300"
          >
            Skincare Essentials
          </Badge>
          <Badge
            variant="outline"
            className="bg-orange-100 text-orange-800 border-orange-300"
          >
            Celebrity Looks
          </Badge>
        </div>
        <Button variant="link" className="text-primary">
          <BookOpen className="w-4 h-4 mr-2" />
          <Link href={"/blogs"}>View All Beauty Tips</Link>
        </Button>
      </div> */}
      <div className="flex flex-wrap sm:flex-col sm:items-start justify-between items-center gap-4">
  <div className="flex flex-wrap items-center space-x-2 sm:space-x-0 sm:space-y-2">
    <TrendingUp className="w-5 h-5 text-pink-500" />
    <span className="font-semibold">Trending Topics:</span>
    <Badge
      variant="outline"
      className="bg-pink-100 text-pink-800 border-pink-300"
    >
      Fall Makeup Trends
    </Badge>
    <Badge
      variant="outline"
      className="bg-purple-100 text-purple-800 border-purple-300"
    >
      Skincare Essentials
    </Badge>
    <Badge
      variant="outline"
      className="bg-orange-100 text-orange-800 border-orange-300"
    >
      Celebrity Looks
    </Badge>
  </div>
  <Button
    variant="link"
    className="text-primary sm:ml-0 sm:mt-2 sm:self-start"
  >
    <BookOpen className="w-4 h-4 mr-2" />
    <Link href={"/blogs"}>View All Beauty Tips</Link>
  </Button>
</div>

    </section>
  );
}
