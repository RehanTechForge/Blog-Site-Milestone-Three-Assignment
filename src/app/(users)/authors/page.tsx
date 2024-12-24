import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getAuthors } from "@/lib/getBlogData";

export default async function AuthorsPage() {
  const authors = await getAuthors();

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Meet Our Authors</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {authors.map((author) => (
          <Card
            key={author._id}
            className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <CardHeader className="p-0">
              <div className="relative h-auto w-full max-w-sm mx-auto">
                <Image
                  src={author.image}
                  alt={author.name}
                  width={400}
                  height={400}
                  quality={100} // Highest quality for sharpness
                  priority // Ensures faster loading for critical images
                  className="object-cover w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <CardTitle className="mb-2">
                <Link
                  href={`/authors/${author.slug.current}`}
                  className="hover:text-primary transition-colors duration-200"
                >
                  {author.name}
                </Link>
              </CardTitle>
              {author.profession && (
                <Badge variant="secondary" className="mb-3">
                  {author.profession || "No profession available."}
                </Badge>
              )}
              <CardDescription className="line-clamp-3">
                {author.description || "No description available."}
              </CardDescription>
              <Link
                href={`/authors/${author.slug.current}`}
                className="mt-4 inline-block text-sm font-medium text-primary hover:underline"
              >
                Read more
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
