import React from "react";
import { NextPage } from "next";

async function getStrapiData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/articles?populate=*`
  );
  const data = await res.json();
  console.log(data);
  return data;
}

const HeroSection: NextPage = async () => {
  const { data } = await getStrapiData();

  return (
    <div className="max-w-[1440px] mx-auto max-xl:mx-16">
      <h1 className="text-xl font-bold">Recent blog posts</h1>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-black w-full h-full row-span-2 py-8">a</div>
        <div className="bg-red-500 w-full h-full py-8">b</div>
        <div className="bg-yellow-300 w-full h-full py-8">c</div>
        <div className="bg-blue-800 w-full h-full col-span-full mt-4 py-8">
          c
        </div>
      </div>

      {/* Server Side Fetching */}
      {/* {JSON.stringify(data[1])} */}
    </div>
  );
};

export default HeroSection;
