"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

interface Blog {
  title: string;
  date: string;
  description: string;
  image: string;
  slug: string;
  author: string;
  category: string;
  categoryImage: string;
}

export default function CarouselSize({
  filteredBlogs,
}: {
  filteredBlogs: Blog[];
}) {
  const plugin = useRef(Autoplay({ delay: 2000 }));

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[plugin.current]}
      className="w-full max-w-full lg:max-w-[90%] mx-auto relative"
    >
      <CarouselContent>
        {filteredBlogs.map((blog, index) => (
          <CarouselItem key={index} className="sm:basis-1/2 lg:basis-1/3 pl-4">
            <Card>
              <CardContent className="flex flex-col gap-4 aspect-square items-center p-6">
                <Image
                  src={`/${blog.categoryImage}`}
                  alt={blog.slug}
                  height={300}
                  width={200}
                  className="w-full h-[200px] sm:h-[250px] lg:h-[300px] object-cover rounded-lg"
                />
                <Link href={"#"}>
                  <h2 className="text-lg sm:text-xl font-bold">
                    {blog.category}
                  </h2>
                </Link>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 hidden sm:flex" />
      <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 hidden sm:flex" />
    </Carousel>
  );
}
