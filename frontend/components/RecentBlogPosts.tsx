import React from "react";
import { NextPage } from "next";
import { IArticle, ICollectionResponse } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import {
  getKeywordClasses,
  getAllBlogs,
  handleDateFormat,
} from "@/utils/functions";

const RecentBlogPosts: NextPage = async () => {
  const articles: ICollectionResponse<IArticle[]> = await getAllBlogs();
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

  return (
    <div className="max-w-[1440px] mx-auto">
      <h1 className="text-2xl font-bold mt-10 border-l-4 pl-2 border-black/20 dark:border-purple-300/40">
        Recent blog posts
      </h1>
      <div className="grid grid-cols-2 gap-14 mt-4">
        {recentBlogPost.map((article: any, index: number) => {
          /* Cant't use BlogCard_Component - because of different cards layout */
          const formattedDate = handleDateFormat(article.attributes.createdAt);
          return (
            <div
              key={index}
              className={`w-full h-full ${index === 0 && "row-span-2"} ${
                index === 3 && "col-span-full"
              } flex ${index === 0 && "flex-col"} gap-6`}
            >
              <div className="relative flex-1 bg-black dark:bg-white rounded-lg overflow-hidden h-[220px]">
                <Link
                  href={`/blog/${article.attributes.slug}?id=${article.id}`}
                >
                  <Image
                    src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${article.attributes.Image.data.attributes.url}`} 
                    // -------------------        blog without image case - not handled   -------------------- 
                    alt="post-cover"
                    height={500}
                    width={500}
                    className="h-full w-full object-cover absolute"
                  />
                </Link>
              </div>
              <div className="flex-1">
                <div>
                  <p className="text-sm text-[#8754ff] dark:text-[#a57eff] font-bold">
                    {formattedDate}
                  </p>
                  <Link
                    href={`/blog/${article.attributes.slug}?id=${article.id}`}
                  >
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
