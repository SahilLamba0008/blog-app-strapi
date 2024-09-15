import AllBlogs from "@/components/AllBlogs";
import RecentBlogPosts from "@/components/RecentBlogPosts";
import React from "react";

const Page = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const page = searchParams["page"] ?? "1";
  const blogs_per_page = 6;
  const searchInput = searchParams["search"] ?? "";

  console.log("Search Params All Blogs", page, blogs_per_page, searchParams);
  return (
    <div>
      <div className="dark:bg-[#090D1F] dark:text-white px-28">
        <RecentBlogPosts />
        <div className="h-[1px] w-full bg-gray-400 mt-14 mx-auto opacity-40" />
        <AllBlogs
          title="All blogs posts"
          pageIndex={page}
          blogsPerPage={blogs_per_page}
          searchInput={searchInput}
        />
      </div>
    </div>
  );
};

export default Page;
