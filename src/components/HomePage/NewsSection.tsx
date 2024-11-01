import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Clock, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getBlogData } from "@/lib/getBlogData";

// Fetch unique categories directly from blogs
const blogs = getBlogData();
const uniqueCategories = [
  "All",
  ...new Set(blogs.map((blog) => blog.category)),
];

export default function ModernNewsSection() {
  return (
    <section className="w-full max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">
        Today's Top Stories
      </h2>

      <Tabs defaultValue="All" className="mb-8">
        <TabsList>
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
                      className="w-full h-40 object-cover"
                    />
                    <CardContent className="p-4">
                      <Badge className="mb-2">{blog.category}</Badge>
                      <CardTitle className="text-lg mb-2">
                        {blog.title}
                      </CardTitle>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{blog.date}</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link
                        href={`/blogs/${blog.slug}`}
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

      <div className="flex justify-between items-center">
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
      </div>
    </section>
  );
}
