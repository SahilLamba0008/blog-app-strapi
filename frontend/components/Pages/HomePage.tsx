import Link from "next/link";
import React from "react";
import HeroSection from "../HeroSection";
import AllBlogs from "../AllBlogs";

const HomePage = () => {
  return (
    <div className="dark:bg-[#090D1F] dark:text-white px-28">
      <HeroSection />
      <div className="h-[1px] w-full bg-gray-400 mt-14 mx-auto opacity-40" />
      <AllBlogs title="All blogs posts" />
    </div>
  );
};

export default HomePage;
