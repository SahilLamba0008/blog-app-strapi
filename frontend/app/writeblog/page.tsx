import WriteBlogForm from "@/components/WriteBlogForm";
import { getBlogsCategories } from "@/utils/functions";
import React from "react";

const page = async () => {
  const categories = await getBlogsCategories();
  return (
    <div className="max-w-[1440px] mx-auto px-28">
      <WriteBlogForm categories={categories} />
    </div>
  );
};

export default page;
