import Image from "next/image";
import Link from "next/link";
import { MousePointerClick, User, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface BlogPost {
  title: string;
  date: string;
  description: string;
  author: string;
  image: string;
  slug: string;
}

export default function BlogCard({ blog }: { blog: BlogPost }) {
  return (
    <Card className="overflow-hidden my-8">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-4">
          <AspectRatio ratio={3 / 4}>
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover rounded-l-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
            />
          </AspectRatio>
        </div>
        <CardContent className="md:col-span-8 flex flex-col justify-between p-6">
          <div>
            <div className="flex justify-between items-center mb-4">
              <Badge variant="secondary" className="text-sm">
                <Calendar className="w-3 h-3 mr-1" />
                {blog.date}
              </Badge>
              <div className="flex items-center text-sm text-muted-foreground">
                <User className="w-4 h-4 mr-1" />
                {blog.author}
              </div>
            </div>
            <h3 className="text-2xl font-semibold tracking-tight mb-2">
              {blog.title}
            </h3>
            <p className="text-muted-foreground mb-6">{blog.description}</p>
          </div>
          <div className="flex justify-start">
            <Button variant="outline" asChild>
              <Link href={`/blogs/${blog.slug}`}>
                <MousePointerClick className="w-4 h-4 mr-2" />
                Read More
              </Link>
            </Button>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
