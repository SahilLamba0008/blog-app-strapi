"use client";
import React from "react";
import { navItems } from "@/constants/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBookReader } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  const pathName: string = usePathname();
  const pathMatchesCategory = new RegExp("/category/([^/]+)$").test(pathName);

  return (
    <div
      className={`w-full sticky top-0 z-10 bg-white dark:bg-[#090D1F] ${
        pathName !== "/auth" && "shadow-sm dark:shadow-white/20"
      } py-2`}
    >
      <div className="text-black dark:text-white text-lg flex justify-between items-center max-w-[1440px] mx-auto max-xl:mx-16">
        {/* <p className="absolute z-50 -top-2 -left-2">&#8482;</p> */}
        <Link href={"/"}>
          <div className="flex gap-1 relative">
            <FaBookReader size={28} />
            <span className="font-black mt-1">Blogger</span>
          </div>
        </Link>
        <div>
          <ul className="flex gap-[14px] py-2 items-center">
            {navItems.map((item, index) => {
              return (
                <div key={index}>
                  <Link href={item.href}>
                    <li
                      className={`transition-all duration-300 ease-in relative before:content-[''] before:absolute before:h-[2px] before:bg-black before:dark:bg-white before:w-0 before:bottom-0 before:rounded-md before:transition-all before:duration-300 before:ease-in-out hover:before:w-full ${
                        pathName === item.href ||
                        (pathMatchesCategory && item.name === "Blogs")
                          ? "text-black before:w-2/4 dark:text-white"
                          : ""
                      }`}
                    >
                      {item.name}
                    </li>
                  </Link>
                </div>
              );
            })}
            {/* Theme Switcher */}
            <ThemeSwitcher />
            {pathName === "/auth" ? (
              // <Link href={"/"}>
              //   <button className="bg-[#090D1F] dark:bg-white text-white dark:text-black px-2 py-1 rounded-md flex items-center">
              //     Continue as Guest <GrFormNextLink size={24} />
              //   </button>
              // </Link>
              <></>
            ) : (
              <Link href={"/auth"}>
                <button className="bg-[#090D1F] dark:bg-white text-white dark:text-black px-2 py-1 rounded-md flex items-center gap-2">
                  Login/Signup <FaUser size={16} />
                </button>
              </Link>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
