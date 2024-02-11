import WriteBlogForm from "@/components/WriteBlogForm";
import { getBlogsCategories } from "@/utils/functions";
import React from "react";

const page = async () => {
  const categories = await getBlogsCategories();
  return (
    <div className="max-w-[1440px] mx-auto px-28">
      <h1 className="text-2xl font-bold border-l-4 pl-2 border-black/20 dark:border-purple-300/40 mt-10 mb-6">
        Write your Blog Post
      </h1>
      <WriteBlogForm categories={categories} />
    </div>
  );
};

export default page;
