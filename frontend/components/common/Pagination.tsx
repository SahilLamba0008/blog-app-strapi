"use client";
import { TDirection } from "@/lib/types";
import {
  redirect,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import React from "react";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
} from "react-icons/md";

const Pagination = ({
  pageIndex,
  blogsPerPage,
  totalPages,
}: {
  pageIndex: number; // page index
  blogsPerPage: number; // articles per page
  totalPages: number; // total pages
}) => {
  const pathName: string = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get("page");

  console.log("Search Params Client:", search);

  const isNextDisabled = (): boolean => {
    console.log("isNextDisabled", pageIndex, totalPages);
    return pageIndex >= totalPages;
  };

  const isPrevDisabled = (): boolean => {
    console.log("isPrevDisabled", pageIndex, totalPages);
    return pageIndex <= 1;
  };

  const handlePagination = async (direction: TDirection) => {
    if (direction === 1 && isNextDisabled()) {
      return;
    }
    if (direction === -1 && isPrevDisabled()) {
      return;
    }
    console.log("Redirect Path:", pathName + `?page=${direction}`);
    router.push(`${pathName}?page=${pageIndex + direction}`);
  };

  return (
    <div className="flex justify-center gap-2 mt-6">
      <button
        type="button"
        className={`transition-all duration-300 ease-in-out bg-black dark:bg-white text-white dark:text-black rounded-md px-4 py-2 flex items-center gap-2 
        ${
          isPrevDisabled()
            ? "disabled"
            : "hover:bg-white hover:text-black relative hover:before:absolute hover:before:border-2 hover:before:h-full hover:before:w-full hover:before:left-0 hover:before:rounded-md hover:before:border-black/20 dark:hover:before:border-white/60 dark:hover:text-white dark:hover:bg-transparent dark:active:text-black dark:active:bg-white hover:opacity-40 active:opacity-100 active:bg-black active:text-white"
        }`}
        onClick={() => handlePagination(-1)}
      >
        {" "}
        <MdOutlineArrowBackIos />
        Prev
      </button>
      <button
        type="button"
        className={`transition-all duration-300 ease-in-out bg-black dark:bg-white text-white dark:text-black rounded-md px-4 py-2 flex items-center gap-2 
        ${
          isNextDisabled()
            ? "disabled"
            : "hover:bg-white hover:text-black relative hover:before:absolute hover:before:border-2 hover:before:h-full hover:before:w-full hover:before:left-0 hover:before:rounded-md hover:before:border-black/20 dark:hover:before:border-white/60 dark:hover:text-white dark:hover:bg-transparent dark:active:text-black dark:active:bg-white hover:opacity-40 active:opacity-100 active:bg-black active:text-white"
        }`}
        onClick={() => handlePagination(1)}
      >
        Next
        <MdOutlineArrowForwardIos />
      </button>
    </div>
  );
};

export default Pagination;
