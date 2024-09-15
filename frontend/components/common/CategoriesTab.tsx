import { ICategory } from "@/lib/types";
import React from "react";
import CategoriesList from "./CategoriesList";
import SearchInput from "./SearchInput";
import CreateBlogButton from "./CreateBlogButton";
import { getBlogsCategories } from "@/utils/functions";

const CategoriesTab = async () => {
  const categories: ICategory[] = await getBlogsCategories();

  return (
    <div className="max-w-[1440px] mx-auto my-8">
      <div className="flex items-center justify-between mb-2">
        <CreateBlogButton />
        <SearchInput />
      </div>
      <CategoriesList categories={categories} />
    </div>
  );
};

export default CategoriesTab;
