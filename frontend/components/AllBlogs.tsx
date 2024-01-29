import React from "react";
import { NextPage } from "next";
import { IArticle, ICollectionResponse } from "@/lib/types";
import Image from "next/image";
import { format } from "date-fns";

async function getStrapiData(): Promise<ICollectionResponse<IArticle[]>> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/articles?populate=*`,
    {
      cache: "no-store",
    } // Prevent caching for fresh data
  );
  const data = await res.json();
  console.log("Response data ->", data);
  return data;
}

const AllBlogs: NextPage = async () => {
  const articles: ICollectionResponse<IArticle[]> = await getStrapiData();
  const { data } = articles;

  const handleDateFormat = (timestamp: string): string => {
    /* timestamp : 2024-01-16T12:06:02.506Z */
    const parsedDate = new Date(timestamp);
    const result = format(parsedDate, "EEEE, dd-MMM-yyyy");
    return result;
  };

  return (
    <div className="max-w-[1440px] mx-auto max-xl:mx-16">
      <h1 className="text-xl font-bold mt-14">All blog posts</h1>
      <div className="grid grid-cols-3 gap-12 mt-6">
        {data.map((article: any, index: number) => {
          const formattedDate = handleDateFormat(article.attributes.createdAt);
          return (
            <div
              key={index}
              className={`w-full h-full gap-6`}
            >
              <div className="relative flex-1 bg-black dark:bg-white rounded-lg overflow-hidden h-[220px]">
                <Image
                  src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${article.attributes.Image.data.attributes.url}`}
                  alt="post-cover"
                  fill
                  className="w-full object-cover object-center"
                />
              </div>
              <div className="flex-1">
                <p className="text-sm text-[#8754ff] dark:text-[#a57eff] font-bold">
                  {formattedDate}
                </p>
                <h1 className="font-bold text-xl mb-2">
                  {article.attributes.title}
                </h1>
                <p className="line-clamp-2">
                  {article.attributes.shortDescription}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllBlogs;
