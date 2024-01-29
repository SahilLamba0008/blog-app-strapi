"use client";
import React, { useEffect, useState } from "react";
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";
import { useTheme } from "next-themes";
const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // console.log("use effect called", resolvedTheme);
    if (resolvedTheme === "dark") {
      document.body.classList.add("dark-scrollbar");
    } else {
      document.body.classList.remove("dark-scrollbar");
    }
  }, [resolvedTheme]);

  // to avoid layout shift
  if (!mounted)
    return (
      <div className="bg-[#090D1F] dark:bg-white rounded-full relative cursor-pointer">
        <div className="h-full w-full flex items-center gap-4 justify-start text-white mx-2 my-[7px] transition-all duration-300 ease-in-out">
          <MdOutlineWbSunny size={20} />
          <IoMoonOutline size={20} />
        </div>
        <div
          className={`slider bg-white rounded-full h-6 w-6 mx-2 -translate-y-1/2 absolute z-10 top-1/2 left-0transition-all duration-300 ease-in-out`}
        ></div>
      </div>
    );

  const handleThemeSwitch = () => {
    const theme = resolvedTheme;
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div
      className="bg-[#090D1F] dark:bg-white rounded-full relative cursor-pointer"
      onClick={handleThemeSwitch}
    >
      <div className="h-full w-full flex items-center gap-4 justify-start text-white dark:text-black mx-2 my-[7px] transition-all duration-300 ease-in-out">
        <MdOutlineWbSunny size={20} />
        <IoMoonOutline size={20} />
      </div>
      <div
        className={`slider bg-white dark:bg-[#090D1F] rounded-full h-6 w-6 mx-2 -translate-y-1/2 absolute z-10 top-1/2 left-0 ${
          resolvedTheme === "light" ? "translate-x-[140%]" : "translate-x-0"
        } transition-all duration-300 ease-in-out`}
      ></div>
    </div>
  );
};

export default ThemeSwitcher;
