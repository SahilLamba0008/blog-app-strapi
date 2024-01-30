import React from "react";

const Pagination = () => {
  return (
    <div className="flex justify-center gap-2 mt-6">
      <button
        type="button"
        className="bg-[#f0f0f0] dark:bg-[#090D1F] border-[#BDBDBD] dark:border-[#bdbdbd6f] border-2 rounded-md px-2 py-1 cursor-pointer ml-1 active:bg-slate-200 transition-all duration-300"
      >
        &lt; Prev
      </button>
      <button
        type="button"
        className="bg-[#f0f0f0] dark:bg-[#090D1F] border-[#BDBDBD] dark:border-[#bdbdbd6f] border-2 rounded-md px-2 py-1 cursor-pointer ml-1 active:bg-slate-200 transition-all duration-300"
      >
        Next &gt;
      </button>
    </div>
  );
};

export default Pagination;
