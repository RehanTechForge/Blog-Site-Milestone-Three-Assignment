import * as React from "react";
import CarouselSize from "./Carousel";
import { client } from "@/sanity/lib/client";

const getCategoryList = () => {
  const query = `*[_type == "category"]{
    title,
    "slug": slug.current,
    description,
    image,
  }`;
  return client.fetch(query, {}, { cache: "no-store" });
};

export default async function CategorySection() {
  const categoryList = await getCategoryList();

  // console.log(categoryList);

  return <CarouselSize categoryList={categoryList} />;
}
