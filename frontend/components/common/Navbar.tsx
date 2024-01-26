"use client";
import React from "react";
import { navItems } from "@/constants/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GrFormNextLink } from "react-icons/gr";
import { FaUser } from "react-icons/fa6";

const Navbar = () => {
  const pathName: string = usePathname();

  return (
    <div className="bg-white text-black text-lg flex justify-between items-center max-w-[1440px] mx-auto max-xl:mx-16">
      <div>LOGO.</div>
      <div>
        <ul className="flex gap-4 py-2 items-center">
          {navItems.map((item, index) => {
            return (
              <div key={index}>
                <Link href={item.href}>
                  <li
                    className={`transition-all duration-300 ease-in relative before:content-[''] before:absolute before:h-[2px] before:bg-black before:w-0 before:bottom-0 before:rounded-md before:transition-all before:duration-300 before:ease-in-out hover:before:w-full ${
                      pathName == item.href && "text-black before:w-2/4"
                    }`}
                  >
                    {item.name}
                  </li>
                </Link>
              </div>
            );
          })}
          {pathName === "/auth" ? (
            <Link href={"/"}>
              <button className="bg-black text-white px-2 py-1 rounded-md flex items-center">
                Continue as Guest <GrFormNextLink size={24} />
              </button>
            </Link>
          ) : (
            <Link href={"/auth"}>
              <button className="bg-black text-white px-2 py-1 rounded-md flex items-center gap-2">
                Login/Signup <FaUser size={16} />
              </button>
            </Link>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
