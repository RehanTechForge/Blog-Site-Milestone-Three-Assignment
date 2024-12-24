import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface RelatedPostProps {
  slug: string;
  image: string;
  title: string;
  description: string;
}

export function RelatedPostCard({
  slug,
  image,
  title,
  description,
}: RelatedPostProps) {
  return (
    <Card className="flex flex-col rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in-out">
      <Image
        src={image}
        alt={title}
        width={300}
        height={169}
        className="object-cover w-full h-72 transition-transform duration-300 ease-in-out group-hover:scale-105"
      />
      <CardContent className="p-4 flex-1">
        <h3 className="text-lg font-semibold mb-3 line-clamp-2">{title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
          {description}
        </p>
      </CardContent>
      <CardFooter className="p-4">
        <Button
          asChild
          variant="outline"
          className="w-full py-2 border-0 rounded-md transition-all duration-200"
        >
          <Link href={`/blogs/${slug}`} className="block text-center">
            Read More
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
