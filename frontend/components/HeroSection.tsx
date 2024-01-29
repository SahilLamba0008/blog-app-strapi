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
    const sortedArticles = blogPosts.sort(
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

  const getRandomTailwindColor = () => {
    const colors = ["red", "blue", "green", "yellow"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];
    const bgClassName = `bg-${randomColor}-100`;
    const textClassName = `text-${randomColor}-400`;
    console.log("random color :", bgClassName, textClassName);
    return colors[randomIndex];
  };
  return (
    <div className="max-w-[1440px] mx-auto max-xl:mx-16">
      <h1 className="text-xl font-bold mt-10">Recent blog posts</h1>
      <div className="grid grid-cols-2 gap-10 mt-4">
        {recentBlogPost.map((article: any, index: number) => {
          const formattedDate = handleDateFormat(article.attributes.createdAt);
          return (
            <div
              key={index}
              className={`w-full h-full ${index === 0 && "row-span-2"} ${
                index === 3 && "col-span-full"
              } flex ${index === 0 && "flex-col"} gap-6`}
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
                <p className="line-clamp-4">
                  {article.attributes.shortDescription}
                </p>
                <div className="flex gap-2 flex-wrap">
                  {article.attributes.keywords.map(
                    (keyword: string, index: number) => {
                      const randomColor = getRandomTailwindColor(); // Call function to get a random color as per design requirements
                      const bgClassName = `bg-${randomColor}-100`;
                      const textClassName = `text-${randomColor}-400`;

                      return (
                        <div
                          key={index}
                          className={`font-medium text-sm ${bgClassName} ${textClassName} bg-blue-100 text-blue-600 px-4 py-1 rounded-full`}
                        >
                          {keyword}
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HeroSection;
