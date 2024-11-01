"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Button } from "../ui/button";
import Link from "next/link";

const slides = [
  {
    image: "/cards/s1.jpg",
    title: "Enhance Your Beauty",
    description:
      "Discover top-quality makeup products that highlight your natural glow.",
    cta: "Read More",
  },
  {
    image: "/cards/s2.jpg",
    title: "New Summer Shades",
    description: "Explore our vibrant summer collection, perfect for any look.",
    cta: "Read More",
  },
  {
    image: "/cards/s3.jpg",
    title: "Exclusive Beauty Deals",
    description:
      "Limited-time offers on bestsellers you’ll love. Don't miss out!",
    cta: "Read More",
  },
];

export default function MainSlider() {
  return (
    <div className="relative w-full h-[600px]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          clickable: true,
          bulletActiveClass: "bg-primary",
          bulletClass:
            "swiper-pagination-bullet bg-primary/50 inline-block w-3 h-3 rounded-full mx-1 cursor-pointer transition-colors",
        }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        effect="fade"
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-center text-white px-4">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    {slide.title}
                  </h2>
                  <p className="text-xl md:text-2xl mb-8">
                    {slide.description}
                  </p>
                  <Button>
                    <Link href={"/blogs"}>{slide.cta}</Link>
                  </Button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-prev absolute left-4 top-1/2 z-10 transform -translate-y-1/2">
        <ChevronLeft className="w-10 h-10 text-primary" />
      </div>
      <div className="swiper-button-next absolute right-4 top-1/2 z-10 transform -translate-y-1/2">
        <ChevronRight className="w-10 h-10 text-primary" />
      </div>
    </div>
  );
}
