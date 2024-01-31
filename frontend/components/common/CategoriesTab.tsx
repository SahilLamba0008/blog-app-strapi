import { ICategory } from "@/lib/types";
import React from "react";
import { IoMdSearch } from "react-icons/io";
import CategoriesList from "./CategoriesList";

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

const CategoriesTab = async () => {
  const categories: ICategory[] = await getStrapiCategories();

  return (
    <div className="my-8">
      <div className="flex justify-end mb-4">
        <div className="flex items-center gap-1 bg-slate-200 dark:bg-blue-200/20 px-4 py-[6px] rounded-md w-[300px]">
          <input
            type="text"
            id="search"
            name="search"
            className="w-full outline-none transition-all duration-300 bg-transparent"
            placeholder="Search"
            required
          />
          <button type="button" className="">
            <IoMdSearch size={25} />
          </button>
        </div>
      </div>
      <CategoriesList categories={categories} />
    </div>
  );
};

export default CategoriesTab;
