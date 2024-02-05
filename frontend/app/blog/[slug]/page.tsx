import { IArticle, ICollectionResponse } from "@/lib/types";
import { getBlogData, handleDateFormat } from "@/utils/functions";
import Image from "next/image";
import React from "react";
import Markdown from "react-markdown";

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
  const blogDate = handleDateFormat(blog.createdAt);
  return (
    <div className="max-w-[850px] mx-auto">
      <div className="w-full h-full mt-10">
        <Image
          src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${blog.Image.data.attributes.url}`}
          alt="blog cover"
          height={1000}
          width={1000}
          className="h-full w-full rounded-xl ring-2 ring-black/10 dark:ring-white/20"
        />
      </div>
      <div className="mt-10 flex justify-between gap-20">
        <div>
          <h1 className="font-bold text-3xl">{blog.title}</h1>
          <p className="text-sm text-[#8754ff] dark:text-[#a57eff] font-bold">
            {blogDate}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div>
            <p className="font-bold">Author:</p>
            <p className="text-sm text-green-600 font-bold -mt-1">
              {author.data.attributes.username}
            </p>
          </div>
          <Image
            src={"/images/user.jpg"}
            alt="user"
            height={250}
            width={250}
            className="h-[50px] w-[50px] object-cover rounded-full"
          />
        </div>
      </div>

      <>{/* Buttons for Interaction : Like,Share,Comment,Save */}</>

      <div className="mt-10 text-md flex flex-col gap-4">
        <Markdown>{blog.body}</Markdown>
      </div>

      <>{/* Buttons for Interaction : Like,Share,Comment,Save */}</>
      <div>
        {/* More Blogs by author */}
      </div>
      <div>
        {/* More Blogs in same category */}
      </div>
    </div>
  );
};

export default page;
