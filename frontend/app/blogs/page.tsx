import BlogsPage from "@/components/Pages/BlogsPage";
import CategoriesTab from "@/components/common/CategoriesTab";
import { NextPage } from "next";
import React from "react";

const page: NextPage = () => {
  return (
    <div className="px-28">
      <CategoriesTab />
      <BlogsPage />
    </div>
  );
};

export default page;
