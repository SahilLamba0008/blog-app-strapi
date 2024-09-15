"use server";
import React from "react";
import { IArticle, ICollectionResponse } from "@/lib/types";
import Pagination from "./common/Pagination";
import SearchInput from "./common/SearchInput";
import BlogCard from "./common/BlogCard";
import { getAllBlogswithPagination } from "@/utils/functions";

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
  const articles: ICollectionResponse<IArticle[]> =
    await getAllBlogswithPagination(blogsPerPage, pageIndex, searchInput);
  const { data } = articles;
  const { meta } = articles;
  console.log(meta.pagination.page);

  const currentPage = meta.pagination.page;
  const totalPages = meta.pagination.pageCount;

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
              <BlogCard article={article} id={article.id} />
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
