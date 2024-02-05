"use client";
import { TDirection } from "@/lib/types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
} from "react-icons/md";

const Pagination = ({
  pageIndex,
  totalPages,
}: {
  pageIndex: number; // page index
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
          isPrevDisabled() ? "disabled" : "active:ring-4 active:ring-black/40"
        }`}
        onClick={() => handlePagination(-1)}
      >
        {" "}
        <MdOutlineArrowBackIos />
        Prev
      </button>
      <div id="page_indexes" className="flex gap-3 items-center">
        {Array.from({ length: totalPages }, (_, index) => {
          return (
            <button
              key={index}
              className={`px-3 py-2 rounded-md ring-2 ${
                index + 1 === pageIndex
                  ? "bg-black text-white dark:text-black dark:bg-white ring-black dark:ring-white font-bold "
                  : "ring-black/10 dark:ring-white/50 dark:text-white/40 text-black/20 hover:text-black hover:font-bold dark:hover:text-white dark:hover:ring-white hover:ring-black"
              } transition-all duration-300 ease-in-out`}
              onClick={() => {
                router.push(`${pathName}?page=${index + 1}`);
              }}
            >
              <p>{index + 1}</p>
            </button>
          );
        })}
      </div>
      <button
        type="button"
        className={`transition-all duration-300 ease-in-out bg-black dark:bg-white text-white dark:text-black rounded-md px-4 py-2 flex items-center gap-2 
        ${
          isNextDisabled() ? "disabled" : "active:ring-4 active:ring-black/40"
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
