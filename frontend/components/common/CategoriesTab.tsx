import { ICategory } from "@/lib/types";
import React from "react";
import CategoriesList from "./CategoriesList";
import SearchInput from "./SearchInput";
import CreateBlogButton from "./CreateBlogButton";

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
    <div className="max-w-[1440px] mx-auto my-8">
      <div className="flex items-center justify-between">
      <CreateBlogButton />
      <SearchInput />
      </div>
      <CategoriesList categories={categories} />
    </div>
  );
};

export default CategoriesTab;
