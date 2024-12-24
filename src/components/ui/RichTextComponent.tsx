import React from "react";
import {
  PortableTextComponents,
  PortableTextComponentProps,
} from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

const components: PortableTextComponents = {
  types: {
    image: ({ value }: { value: any }) => (
      <figure className="my-8">
        <div className="overflow-hidden rounded-lg transition-shadow duration-300">
          <Image
            src={urlFor(value).url()}
            alt={value.alt || "Blog post image"}
            width={800}
            height={600}
            className="h-auto w-1/3 mx-auto transition-transform duration-300 hover:scale-105 cursor-pointer"
            placeholder="blur"
            blurDataURL={urlFor(value).width(50).quality(20).blur(50).url()}
          />
        </div>
        {value.alt && (
          <figcaption className="mt-2 text-center text-sm text-muted-foreground italic">
            {value.alt}
          </figcaption>
        )}
      </figure>
    ),
  },
  marks: {
    link: ({
      children,
      value,
    }: {
      children: React.ReactNode;
      value?: { href: string };
    }) => (
      <Link
        href={value?.href || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:text-primary/80 underline decoration-primary/30 underline-offset-2 transition-colors duration-200"
      >
        {children}
      </Link>
    ),
  },
  block: {
    h1: ({ children }: PortableTextComponentProps<any>) => (
      <h1 className="text-3xl font-bold mt-8 mb-4 text-foreground leading-tight">
        {children}
      </h1>
    ),
    h2: ({ children }: PortableTextComponentProps<any>) => (
      <h2 className="text-2xl font-semibold mt-6 mb-3 text-foreground leading-snug">
        {children}
      </h2>
    ),
    h3: ({ children }: PortableTextComponentProps<any>) => (
      <h3 className="text-xl font-medium mt-4 mb-2 text-foreground leading-relaxed">
        {children}
      </h3>
    ),
    normal: ({ children }: PortableTextComponentProps<any>) => (
      <p className="text-base text-muted-foreground leading-relaxed mb-4">
        {children}
      </p>
    ),
    blockquote: ({ children }: PortableTextComponentProps<any>) => (
      <blockquote className="border-l-4 border-primary pl-4 py-2 my-6 bg-primary/10 rounded-r-lg italic text-muted-foreground">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: PortableTextComponentProps<any>) => (
      <ul className="list-disc list-inside space-y-1 mb-4 text-muted-foreground pl-4">
        {children}
      </ul>
    ),
    number: ({ children }: PortableTextComponentProps<any>) => (
      <ol className="list-decimal list-inside space-y-1 mb-4 text-muted-foreground pl-4">
        {children}
      </ol>
    ),
  },
};

export default components;
