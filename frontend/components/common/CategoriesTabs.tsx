import { ICategory } from "@/lib/types";
import Link from "next/link";
import React from "react";
import { IoMdSearch } from "react-icons/io";

const getStrapiCategories = async (): Promise<ICategory[]> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/categories`,
      {
        cache: "no-store",
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
        },
      }
    );

    if (!res.ok) {
      throw new Error(`HTTP error ${res.status}`);
    }

    const categories = await res.json();
    // console.log("Response categories ->", categories.data);
    return categories.data;
  } catch (error) {
    throw new Error(`${error}`);
  }
};

const CategoriesTabs = async () => {
  const categories: ICategory[] = await getStrapiCategories();

  return (
    <div className="my-8 flex items-center justify-between gap-4">
      <ul className="flex items-center overflow-x-scroll hidden-scrollbar flex-[.65]">
        <li className="mr-6 pb-4 rounded-sm border-b-4">
          <Link href={"#"}>All</Link>
        </li>
        {categories.map((category: ICategory, index: number) => {
          return (
            <li
              key={index}
              className="mr-6 pb-4 rounded-sm border-b-4 whitespace-nowrap"
            >
              <Link href={`/category/${category.attributes.slug}`}>
                {category.attributes.title}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="ml-10 flex items-center gap-1 ">
        <input
          type="text"
          id="search"
          name="search"
          className="w-full bg-[#f0f0f0] dark:bg-[#090D1F] border-[#BDBDBD] dark:border-[#bdbdbd6f] border-2 outline-none rounded-md px-2 py-[4px] focus:bg-white transition-all duration-300 bg-white-after-focus"
          placeholder="Search"
          required
        />
        <button
          type="button"
          className="bg-[#f0f0f0] dark:bg-[#090D1F] border-[#BDBDBD] dark:border-[#bdbdbd6f] border-2 rounded-md px-2 py-1 cursor-pointer ml-1 active:bg-slate-200 transition-all duration-300"
        >
          <IoMdSearch size={25} />
        </button>
      </div>
    </div>
  );
};

export default CategoriesTabs;
