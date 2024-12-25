import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

// Define the Blog interface to type the fetched data
export interface Blog {
  title: string;
  slug: { current: string; _type: string };
  category: string;
  author: {
    name: string;
    slug: { current: string; _type: string };
  };
  image: string;
  _createdAt: string;
  description: string;
  body: Array<{
    _key: string;
    _type: string;
    children: Array<{
      _key: string;
      _type: string;
      text: string;
      marks: string[];
    }>;
    style: string;
  }>;
}
export interface Author {
  _id: string;
  name: string;
  slug: { current: string };
  image: string;
  body: Array<{
    _key: string;
    _type: string;
    children: Array<{
      _key: string;
      _type: string;
      text: string;
      marks: string[];
    }>;
    style: string;
  }>;
  profession: string;
  description: string;
}
// export const revalidate = process.env.NODE_ENV === "development" ? 30 : 3600;
export async function getBlogData(): Promise<Blog[]> {
  const query = `*[_type == "post"]{
    title,
    slug,
    "category": categories[0]->title,
    "author": author->{name,slug},
    "image": mainImage.asset->url,
    body,
    description,
    _createdAt
  }`;

  // Fetch the data from Sanity
  const blogs = await client.fetch(query);

  return blogs;
}
// export async function getBlogsBySearch(query: string) {
//   return client.fetch(
//     groq`*[_type == "post" && (title match $query || description match $query || body[].children[].text match $query)] {
//     title,
//     slug,
//     "category": categories[0]->title,
//     "author": author->name,
//     "image": mainImage.asset->url,
//     body,
//     description,
//     _createdAt
//   }`,
//     { query: `*${query}*` }
//   );
// }

export async function getBlogsBySearch(query: string) {
  return client.fetch(
    groq`*[_type == "post" && (title match $query || description match $query || body[].children[].text match $query)] {
      title,
      slug,
      "category": categories[0]->title,
      "author": author->name,
      "image": mainImage.asset->url,
      body,
      description,
      _createdAt
    }`,
    // @ts-expect-error: The following line causes an error due to missing types in the library
    { query } // Pass the query object directly
  );
}

export async function getCategories(): Promise<string[]> {
  // First, fetch all unique category references
  const categoryRefs = await client.fetch(
    groq`*[_type == "post"].categories[0]._ref`
  );

  // Remove duplicates from categoryRefs
  const uniqueRefs = [...new Set(categoryRefs)];

  // Then, fetch the actual category documents using these references
  const categories = await client.fetch(
    groq`*[_type == "category" && _id in $refs]{
      title
    }`,
    { refs: uniqueRefs }
  );

  // Extract and return the category titles
  return categories.map((cat: { title: string }) => cat.title);
}

// Update getBlogsByCategory function
export async function getBlogsByCategory(
  categoryTitle: string
): Promise<Blog[]> {
  return client.fetch(
    groq`*[_type == "post" && references(*[_type=="category" && slug.current==$categoryTitle]._id)] {
      title,
      slug,
      description,
      "image": mainImage.asset->url,
      "category": *[_type=="category" && _id==^.categories[0]._ref][0].title,
      "author": author->name,
      _createdAt
    }`,
    { categoryTitle }
  );
}
export async function getAuthors(): Promise<Author[]> {
  return client.fetch(
    groq`*[_type == "author"] {
      _id,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      body,
      profession,
      description
    }`
  );
}

export async function getAuthorBySlug(slug: string): Promise<Author | null> {
  return client.fetch(
    groq`*[_type == "author" && slug.current == $slug][0] {
      _id,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      body,
      profession,
      description
    }`,
    { slug }
  );
}
const query = groq`
  *[_type == "post" && slug.current == $slug][0] {
    title,
    _id,
    body,
    "comments": *[_type == "comment" && post._ref == ^._id] {
      name,
      content,
      createdAt
    }
  }
`;
export async function fetchPostData(
  // @ts-expect-error: The following line causes an error due to missing types in the library
  slug
) {
  const post = await client.fetch(query, { slug });
  // console.log("dsadasda", post);

  return post;
}
