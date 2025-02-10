import { client } from "../client";

// Updated query for fetching a single blog post by slug with author details
const query = `*[_type == "blog" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    publishedAt,
    mainImage{
      asset->{
        _id,
        url
      }
    },
    excerpt,
    body,
    author->{
      _id,
      name,
      image{
        asset->{
          _id,
          url
        }
      }
    }
}`;

export const getBlogBySlug = async (slug: string) => {
    try {
        const blog = await client.fetch(query, { slug });
        return blog;
    } catch (error) {
        console.error("Error fetching blog by slug:", error);
        return null;
    }
};
