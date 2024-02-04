import AllBlogs from "@/components/AllBlogs";
import CategoriesTab from "@/components/common/CategoriesTab";
import React from "react";

const page = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const page = searchParams["page"] ?? "1";
  const blogs_per_page = 6;
  const searchInput = searchParams["search"] ?? "";

  console.log("Search Params All Blogs", page, blogs_per_page);

  return (
    <div className="px-28">
      <CategoriesTab />
      <div className="dark:bg-[#090D1F] dark:text-white" id="blogs_page">
        <AllBlogs
          title=""
          pageIndex={page}
          blogsPerPage={blogs_per_page}
          searchInput={searchInput}
        />
      </div>
    </div>
  );
};

export default page;
