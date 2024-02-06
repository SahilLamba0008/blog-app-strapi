import { IArticle, ICollectionResponse } from "@/lib/types";
import { getBlogData, totalPublishedDays } from "@/utils/functions";
import Image from "next/image";
import React from "react";
import Markdown from "react-markdown";
import BlogAuthorDetails from "@/components/common/BlogAuthorDetails";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  const transformedSlug = slug
    .replace(/-([a-z])/g, (_, match) => ` ${match.toUpperCase()}`)
    .replace(/^\w/, (match) => match.toUpperCase());
  console.log("Meta->", slug, transformedSlug);
  return {
    title: transformedSlug,
  };
}

const page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string[] | string | undefined };
}) => {
  const blogId = searchParams["id"];
  console.log("blog id", blogId, searchParams);

  const article: ICollectionResponse<IArticle[]> = await getBlogData(blogId);
  const { data } = article;

  const blog = data[0].attributes;
  const author = data[0].attributes.author;
  const category = data[0].attributes.category.data.attributes.title;
  const blogPublishedDays = totalPublishedDays(blog.createdAt);

  return (
    <div className="max-w-[850px] mx-auto">
      <Image
        src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${blog.Image.data.attributes.url}`}
        alt="blog cover"
        height={1000}
        width={1000}
        className="h-full w-full rounded-xl ring-2 ring-black/10 dark:ring-white/20  mt-10"
      />
      <h1 className="font-bold text-5xl mt-6">{blog.title}</h1>

      <div className="h-[0.5px] w-full bg-gray-400 my-5 mx-auto opacity-40" />
      <BlogAuthorDetails
        category={category}
        blogPublishedDays={blogPublishedDays}
        author={author}
      />
      <div className="h-[0.5px] w-full bg-gray-400 my-4 mx-auto opacity-40" />
      <div className="text-md flex flex-col gap-4 mt-10 font-blogbody text-[18px] blog dark:text-white">
        <Markdown>{blog.body}</Markdown>
      </div>
    </div>
  );
};

export default page;
