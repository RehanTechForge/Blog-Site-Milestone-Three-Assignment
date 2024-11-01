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

const CarouselSize = ({ filteredBlogs }: { filteredBlogs: Blog[] }) => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      className="w-full max-w-[90%] mx-auto"
    >
      <CarouselContent>
        {filteredBlogs.map((blog, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="">
              <Card>
                <CardContent className="flex flex-col gap-4 aspect-square items-center py-6">
                  <Image
                    src={`/${blog.categoryImage}`}
                    alt={blog.slug}
                    height={300}
                    width={200}
                    className="w-full h-[450px] object-cover rounded-lg"
                  />
                  <Link href={"#"}>
                    <h2 className="text-xl font-bold">{blog.category}</h2>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CarouselSize;
