"use client";
import { ICategory } from "@/lib/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Mousewheel, Keyboard } from "swiper/modules";

const CategoriesList = ({ categories }: { categories: ICategory[] }) => {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <div>
      <Swiper
        cssMode={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        slidesPerView={9}
        slidesPerGroup={2}
        spaceBetween={8}
        modules={[Navigation, Mousewheel, Keyboard]}
        className="category-swiper cursor-pointer text-center"
      >
        <SwiperSlide>
          <div
            className={`px-4 py-2 ${
              pathName === "/blogs"
                ? "bg-black text-white dark:bg-white dark:text-black"
                : ""
            } rounded-md hover:bg-black hover:text-white transition-all duration-300`}
          >
            <Link href={"#"}>All</Link>
          </div>
        </SwiperSlide>
        {categories.map((category: ICategory, index: number) => {
          return (
            <SwiperSlide key={index}>
              <Link href={`/category/${category.attributes.slug}`}>
                <div className="px-4 py-2 whitespace-nowrap overflow-hidden text-ellipsis rounded-md border-2 opacity-50 hover:opacity-100 hover:bg-black dark:hover:bg-white dark:hover:text-black hover:text-white transition-all duration-300">
                  {category.attributes.title}
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default CategoriesList;
