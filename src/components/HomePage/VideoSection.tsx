import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const VideoSection = () => {
  return (
    <section className="my-10 px-4 grid gap-6 lg:grid-cols-2 max-w-7xl mx-auto">
      {/* Main Video Section */}
      <div className="flex flex-col items-center text-center lg:text-left lg:items-center">
        <Image
          src="/videoimg.png"
          alt="Video thumbnail"
          height={200}
          width={300}
          className="rounded-full"
        />
        <h2 className="text-2xl font-semibold text-primary my-4">
          Everything You Need to Know About Coloring Your Hair
        </h2>
        <p className="text-gray-700 leading-relaxed">
          In this course, you will learn the basics of hair color, such as the
          different types, techniques, and products. You will also learn how to
          choose the best color for your hair type, skin tone, and personal
          style, along with tips on application and aftercare.
        </p>
      </div>

      {/* Video List Section */}
      <div className="border border-primary rounded-lg p-4 space-y-6">
        {[
          {
            src: "/v3.png",
            title: "How to Apply Makeup for a Natural Look",
            description:
              "Learn how to apply makeup for a natural look that enhances your features and gives a fresh, radiant appearance. Basic products like foundation, concealer, and lip gloss are all you need.",
            author: "By: Jason",
          },
          {
            src: "/v2.png",
            title: "How to Apply Makeup for a Natural Look",
            description:
              "Learn how to apply makeup for a natural look that enhances your features and gives a fresh, radiant appearance. Basic products like foundation, concealer, and lip gloss are all you need.",
            author: "By: Jason",
          },
        ].map((video, index) => (
          <div key={index} className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            <div className="sm:col-span-1">
              <Image
                src={video.src}
                alt={`Thumbnail for ${video.title}`}
                height={150}
                width={200}
                className="rounded-full"
              />
            </div>
            <div className="sm:col-span-3">
              <h3 className="text-xl font-semibold text-primary">
                {video.title}
              </h3>
              <p className="text-gray-600 mt-2">{video.description}</p>
              <Button variant="outline" className="mt-2">
                {video.author}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideoSection;
