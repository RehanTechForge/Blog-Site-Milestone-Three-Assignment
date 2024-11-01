import * as React from "react";
import { getBlogData } from "@/lib/getBlogData";
import CarouselSize from "./Carousel";
export default function CategorySection() {
  const blogs = getBlogData();

  // Track unique categories using a Set
  const uniqueCategories = new Set();

  const filteredBlogs = blogs.filter((blog) => {
    if (uniqueCategories.has(blog.category)) {
      return false; // Skip if category already exists in the Set
    } else {
      uniqueCategories.add(blog.category);
      return true; // Include the first instance of each category
    }
  });

  return <CarouselSize filteredBlogs={filteredBlogs} />;
}
