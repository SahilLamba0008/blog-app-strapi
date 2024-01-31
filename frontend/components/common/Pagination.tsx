import React from "react";
import { GrPrevious } from "react-icons/gr";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
} from "react-icons/md";

const Pagination = () => {
  return (
    <div className="flex justify-center gap-2 mt-6">
      <button
        type="button"
        className="bg-black dark:bg-white text-white dark:text-black rounded-md px-4 py-2 cursor-pointer active:bg-[#585858] 
        dark:active:bg-[#bababa] transition-all duration-100 ease-in-out"
      >
        <MdOutlineArrowBackIos />
      </button>
      <button
        type="button"
        className="bg-black dark:bg-white text-white dark:text-black rounded-md px-4 py-2 cursor-pointer active:bg-[#585858] 
        dark:active:bg-[#bababa] transition-all duration-100 ease-in-out"
      >
        <MdOutlineArrowForwardIos />
      </button>
    </div>
  );
};

export default Pagination;
