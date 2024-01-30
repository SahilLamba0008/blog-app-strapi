import React from "react";
import AllBlogs from "../AllBlogs";
import CategoriesTabs from "../common/CategoriesTabs";

const BlogsPage = () => {
  return (
    <div className="dark:bg-[#090D1F] dark:text-white px-28">
      <CategoriesTabs />
      <AllBlogs title="" />
    </div>
  );
};

export default BlogsPage;