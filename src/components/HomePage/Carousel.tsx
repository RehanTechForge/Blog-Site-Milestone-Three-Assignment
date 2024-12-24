"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import { useRef, useState } from "react";
import { urlFor } from "@/sanity/lib/image";

interface Blog {
  title: string;
  description: string;
  image: { _type: "image"; asset: { _ref: string; _type: string } };
  slug: string;
}

export default function CarouselSize({
  categoryList,
}: {
  categoryList: Blog[];
}) {
  const plugin = useRef(Autoplay({ delay: 2000 }));
  const [imagesLoaded, setImagesLoaded] = useState<{ [key: string]: boolean }>(
    Object.fromEntries(categoryList.map((cat) => [cat.slug, false]))
  );

  const handleImageLoad = (slug: string) => {
    setImagesLoaded((prev) => ({ ...prev, [slug]: true }));
  };

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
        {categoryList.map((cat, index) => (
          <CarouselItem
            key={cat.slug}
            className="sm:basis-1/2 lg:basis-1/3 pl-4"
          >
            <Card>
              <CardContent className="flex flex-col gap-4 aspect-square items-center p-6">
                <Link href={`/category/${cat.slug}`} className="w-full">
                  <div className="relative w-full h-[200px] sm:h-[250px] lg:h-[300px]">
                    {!imagesLoaded[cat.slug] && (
                      <Skeleton className="absolute inset-0 rounded-lg" />
                    )}
                    <Image
                      src={
                        cat.image?.asset
                          ? urlFor(cat.image.asset).url()
                          : "/fallback-image.jpg"
                      }
                      alt={cat.title || "Image"}
                      fill
                      quality={100}
                      className={`object-cover rounded-lg transition-opacity duration-300 ${
                        imagesLoaded[cat.slug] ? "opacity-100" : "opacity-0"
                      }`}
                      onLoad={() => handleImageLoad(cat.slug)}
                    />
                  </div>
                </Link>
                <Link href={`/category/${cat.slug}`} className="w-full">
                  {!imagesLoaded[cat.slug] ? (
                    <Skeleton className="h-6 w-3/4 mx-auto" />
                  ) : (
                    <h2 className="text-lg sm:text-xl font-bold text-center">
                      {cat.title}
                    </h2>
                  )}
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
