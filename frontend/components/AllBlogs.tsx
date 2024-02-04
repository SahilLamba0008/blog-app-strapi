"use server";
import React from "react";
import { IArticle, ICollectionResponse } from "@/lib/types";
import Pagination from "./common/Pagination";
import SearchInput from "./common/SearchInput";
import BlogCard from "./common/BlogCard";

const AllBlogs = async ({
  title,
  pageIndex,
  blogsPerPage,
  searchInput,
}: {
  title: string;
  pageIndex: string | string[];
  blogsPerPage: number;
  searchInput?: string | string[];
}) => {
  const getStrapiData = async (): Promise<ICollectionResponse<IArticle[]>> => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/articles?populate=*&pagination[pageSize]=${blogsPerPage}&pagination[page]=${pageIndex}&filters[title][$containsi]=${searchInput}`,
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

  const articles: ICollectionResponse<IArticle[]> = await getStrapiData();
  const { data } = articles;
  const { meta } = articles;
  console.log(meta.pagination.page);

  const currentPage = meta.pagination.page;
  const totalPages = meta.pagination.pageCount;
  const totalBlogsPerPage = 3; /* use : meta.pagination.pageSize || Add: Custom value*/

  return (
    <div className="max-w-[1440px] mx-auto max-xl:mx-16 mb-10">
      {title !== "" && (
        <div className="mt-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold border-l-4 pl-2 border-black/20 dark:border-purple-300/40">
            {title}
          </h1>
          <SearchInput />
        </div>
      )}
      <div className="grid grid-cols-3 gap-12 mt-6">
        {data.map((article: any, index: number) => {
          return (
            <div key={index}>
              <BlogCard article={article} />
            </div>
          );
        })}
      </div>
      <div className="h-[0.5px] w-full bg-gray-400 mt-14 mx-auto opacity-40" />
      <Pagination pageIndex={currentPage} totalPages={totalPages} />
    </div>
  );
};

export default AllBlogs;
