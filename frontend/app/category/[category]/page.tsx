import BlogCard from "@/components/common/BlogCard";
import { IArticle, ICollectionResponse } from "@/lib/types";
import React from "react";
import { headers } from "next/headers";
import Image from "next/image";
import Pagination from "@/components/common/Pagination";

const Category = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const page = searchParams["page"] ?? "1";
  const blogs_per_page = 6;
  const searchInput = searchParams["search"] ?? "";

  const headersList = headers();
  const path = headersList.get("x-pathname");
  const pathParts: string[] = path!.split("/");

  // Ensure there are at least two parts (non-empty path and the last part)
  const slug: string | null =
    pathParts.length >= 2 ? pathParts[pathParts.length - 1] : null;

  const getStrapiData = async (
    slug: string | null
  ): Promise<ICollectionResponse<IArticle[]>> => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/articles?filters[category][slug][$eq]=${slug}&populate=*&pagination[pageSize]=${blogs_per_page}&pagination[page]=${page}&filters[title][$containsi]=${searchInput}`,
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
      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  };
  const articles: ICollectionResponse<IArticle[]> = await getStrapiData(slug);

  const { data } = articles;
  const { meta } = articles;

  const currentPage = meta.pagination.page;
  const totalPages = meta.pagination.pageCount;

  return (
    <div className="h-full w-full">
      {data.length !== 0 ? (
        <div className="grid grid-cols-3 gap-12 mt-6">
          {data.map((article: any, index: number) => (
            <div key={index}>
              <BlogCard article={article} />
            </div>
          ))}
        </div>
      ) : (
        <div className="h-full w-full flex flex-col items-center flex-1">
          <h1 className="font-bold text-2xl bg-gradient-to-r from-blue-500 from-10% via-emerald-500 via-30% to-cyan-500 to-90% bg-clip-text text-transparent">
            Uh-oh, it seems our blog garden is a bit empty!
          </h1>
          <Image
            src={"/images/noblogs.svg"}
            alt="no blogs found"
            height={500}
            width={500}
            className="object-contain h-[500px]"
          />
        </div>
      )}
      <div className="h-[0.5px] w-full bg-gray-400 mt-14 mx-auto opacity-40" />
      <Pagination pageIndex={currentPage} totalPages={totalPages} />
    </div>
  );
};

export default Category;
