"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { useDebounce } from "use-debounce";

const SearchInput = () => {
  const router = useRouter();
  const pathName = usePathname();
  const [text, setText] = useState<string>("");
  const [value] = useDebounce(text, 300);

  useEffect(() => {
    if (!value) {
      router.push(pathName, { scroll: false });
    } else {
      router.push(`${pathName}?search=${value}`, {
        scroll: false,
      }); /* will not scroll to top when search anything */
    }
  }, [value, router, pathName]);

  /*Clean-up search input when switching paths */
  useEffect(() => {
    setText("");
  }, [pathName]);

  return (
    <div className="flex justify-end mb-4">
      <div className="flex items-center gap-1 bg-slate-200 dark:bg-blue-200/20 px-4 py-2 rounded-md w-[300px]">
        <input
          type="text"
          id="search"
          name="search"
          className="w-full outline-none transition-all duration-300 bg-transparent"
          placeholder="Search"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <button type="button" className="">
          <IoMdSearch size={25} />
        </button>
      </div>
    </div>
  );
};

export default SearchInput;
