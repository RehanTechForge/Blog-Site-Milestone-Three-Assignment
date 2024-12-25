import { defineField, defineType } from "sanity";

export const commentType = defineType({
  name: "comment",
  title: "Comment",
  type: "document",
  fields: [
    defineField({
      name: "commentAuthor",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "commentText",
      type: "text",
      title: "Comment Content",
    }),
    defineField({
      name: "post",
      title: "Blog Post",
      type: "reference",
      to: [{ type: "post" }],
    }),
    defineField({
      name: "publishedAt",
      type: "datetime",
    }),
  ],
});
