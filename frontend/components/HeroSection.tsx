import React from "react";
import { NextPage } from "next";
import { IArticle, ICollectionResponse } from "@/lib/types";

async function getStrapiData(): Promise<ICollectionResponse<IArticle[]>> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/articles?populate=*`
  );
  const data = await res.json();
  console.log("Response data ->", data);
  return data;
}

const HeroSection: NextPage = async () => {
  const articles: ICollectionResponse<IArticle[]> = await getStrapiData();
  const { data } = articles;

  return (
    <div className="max-w-[1440px] mx-auto max-xl:mx-16">
      <h1 className="text-xl font-bold my-8">Recent blog posts</h1>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-black w-full h-full row-span-2 py-8">a</div>
        <div className="bg-red-500 w-full h-full py-8">b</div>
        <div className="bg-yellow-300 w-full h-full py-8">c</div>
        <div className="bg-blue-800 w-full h-full col-span-full mt-4 py-8">
          c
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 my-8">
        {data.map((article: any, index: number) => {
          return (
            <div key={index}>
              <h1>{article.attributes.title}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HeroSection;
