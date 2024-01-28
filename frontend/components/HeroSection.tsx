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

const HeroSection: NextPage = async () => {
  const articles: ICollectionResponse<IArticle[]> = await getStrapiData();
  const { data } = articles;

  const handleRecentBlogPost = (blogPosts: IArticle[]): IArticle[] => {
    const sortedArticles = data.sort(
      (a, b) =>
        Date.parse(b.attributes.publishedAt) -
        Date.parse(a.attributes.publishedAt)
    );
    return sortedArticles.splice(0, 4);
  };

  const recentBlogPost = handleRecentBlogPost(data);

  const handleDateFormat = (timestamp: string): string => {
    /* timestamp : 2024-01-16T12:06:02.506Z */
    const parsedDate = new Date(timestamp);
    const result = format(parsedDate, "EEEE, dd-MMM-yyyy");
    return result;
  };

  return (
    <div className="max-w-[1440px] mx-auto max-xl:mx-16">
      <h1 className="text-xl font-bold my-8">Recent blog posts</h1>
      <div className="grid grid-cols-2 gap-10 my-8">
        {recentBlogPost.map((article: any, index: number) => {
          const formattedDate = handleDateFormat(article.attributes.createdAt);
          return (
            <div
              key={index}
              className={`w-full h-full ${index === 0 && "row-span-2"} ${
                index === 3 && "col-span-full"
              } flex ${index === 0 && "flex-col"} gap-6`}
            >
              <div className="flex-1">
                <Image
                  // src={
                  //   article.attributes.Image.data.attributes.url
                  // }
                  src={
                    "http://localhost:1337/uploads/thumbnail_instagram_reels_thumbnail_illustration_151ff10891.png" /* test only */
                  }
                  alt="post-cover"
                  height={1000}
                  width={1000}
                  className="h-[200px] w-full object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="text-sm text-[#6941C6] font-bold">
                  {formattedDate}
                </p>
                <h1 className="font-bold text-xl mb-2">
                  {article.attributes.title}
                </h1>
                <p className="line-clamp-3">{article.attributes.body}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HeroSection;
