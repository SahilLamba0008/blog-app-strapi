import React from "react";
import { NextPage } from "next";
import { IArticle, ICollectionResponse } from "@/lib/types";
import Image from "next/image";
import { format } from "date-fns";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

const getStrapiData = async (): Promise<ICollectionResponse<IArticle[]>> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/articles?populate=*`,
      {
        cache: "no-store",
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
        },
      } // Prevent caching for fresh data
    );

    if (!res.ok) {
      throw new Error(`HTTP error ${res.status}`);
    }

    const data = await res.json();
    // console.log("Response data ->", data);
    return data;
  } catch (error) {
    throw new Error(`${error}`);
  }
};

const RecentBlogPosts: NextPage = async () => {
  const articles: ICollectionResponse<IArticle[]> = await getStrapiData();
  const { data } = articles;

  const handleRecentBlogPost = (blogPosts: IArticle[]): IArticle[] => {
    const sortedArticles = blogPosts.sort(
      (a, b) =>
        Date.parse(b.attributes.publishedAt) -
        Date.parse(a.attributes.publishedAt)
    );
    // console.log(sortedArticles.splice(0, 4));
    return sortedArticles.splice(0, 4);
  };

  const recentBlogPost = handleRecentBlogPost(data);

  const handleDateFormat = (timestamp: string): string => {
    /* timestamp : 2024-01-16T12:06:02.506Z */
    const parsedDate = new Date(timestamp);
    const result = format(parsedDate, "EEEE, dd-MMM-yyyy");
    return result;
  };

  const getKeywordClasses = (keywordLength: number) => {
    switch (true) {
      case keywordLength <= 4:
        return "bg-green-100 text-green-500";
      case keywordLength >= 5 && keywordLength <= 8:
        return "bg-red-100 text-red-400";
      case keywordLength > 8 && keywordLength <= 12:
        return "bg-purple-100 text-purple-500";
      case keywordLength === 7:
        return "bg-blue-100 text-blue-500";
      case keywordLength > 12 && keywordLength <= 14:
        return "bg-pink-100 text-pink-500";
      default:
        return "bg-orange-100 text-orange-500";
    }
  };

  return (
    <div className="max-w-[1440px] mx-auto max-xl:mx-16">
      <h1 className="text-2xl font-bold mt-10 border-l-4 pl-2 border-black/20 dark:border-purple-300/40">
        Recent blog posts
      </h1>
      <div className="grid grid-cols-2 gap-14 mt-4">
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
                <Link href={`/blog/${article.attributes.slug}`}>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${article.attributes.Image.data.attributes.url}`}
                    alt="post-cover"
                    fill
                    className="w-full object-cover object-center"
                  />
                </Link>
              </div>
              <div className="flex-1">
                <div>
                  <p className="text-sm text-[#8754ff] dark:text-[#a57eff] font-bold">
                    {formattedDate}
                  </p>
                  <Link href={`/blog/${article.attributes.slug}`}>
                    <div className="font-bold text-xl mb-2 flex justify-between gap-3 group">
                      <h1 className="line-clamp-2">
                        {article.attributes.title}
                      </h1>
                      <div className="opacity-40 dark:group-hover:text-cyan-400 group-hover:text-blue-500 group-hover:opacity-100 transition-all duration-300">
                        <MdArrowOutward size={24} />
                      </div>
                    </div>
                  </Link>
                  <p
                    className={`${
                      index === 0 || index === 3
                        ? "line-clamp-5"
                        : "line-clamp-3"
                    } pointer-events-none`}
                  >
                    {article.attributes.shortDescription}
                  </p>
                </div>
                <div className="flex gap-2 flex-wrap mt-2 pointer-events-none">
                  {article.attributes.keywords.map(
                    (keyword: string, index: number) => {
                      return (
                        <div
                          key={index}
                          className={`${"font-medium text-sm px-4 py-1 rounded-full"} ${getKeywordClasses(
                            keyword.length
                          )}`}
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

export default RecentBlogPosts;
