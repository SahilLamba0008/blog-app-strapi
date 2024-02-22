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
  var categoryTitle: string = "All";

  const isActiveTab = (categorySlug: string, title: string): boolean => {
    if (pathName === `/category/${categorySlug}`) categoryTitle = title;
    return pathName === `/category/${categorySlug}` ? true : false;
  };

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
          <Link href={"/blogs"} scroll={false}>
            <div
              className={`px-4 py-2 ${
                pathName === "/blogs"
                  ? "bg-black text-white dark:bg-white dark:text-black border-black"
                  : "rounded-md opacity-50"
              } rounded-md hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:opacity-100 transition-all duration-300 hover:border-black border-2`}
            >
              All
            </div>
          </Link>
        </SwiperSlide>
        {categories.map((category: ICategory, index: number) => {
          return (
            <SwiperSlide key={index}>
              <Link
                href={`/category/${category.attributes.slug}`}
                scroll={false}
              >
                <div
                  className={`px-4 py-2 whitespace-nowrap overflow-hidden text-ellipsis rounded-md border-2 hover:opacity-100 hover:bg-black dark:hover:bg-white dark:hover:text-black hover:text-white transition-all duration-300 ${
                    isActiveTab(
                      category.attributes.slug,
                      category.attributes.title
                    )
                      ? "bg-black text-white dark:bg-white dark:text-black border-black"
                      : "rounded-md opacity-50"
                  } hover:border-black`}
                >
                  {category.attributes.title}
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <h1 className="text-2xl font-bold border-l-4 pl-2 border-black/20 dark:border-purple-300/40 mt-4">
        {categoryTitle}
      </h1>
    </div>
  );
};

export default CategoriesList;
