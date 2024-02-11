"use client";
import { ICategory } from "@/lib/types";
import React, {
  ChangeEvent,
  FormEvent,
  ReactHTMLElement,
  useState,
} from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import ImageInput from "./common/ImageInput";
import KeywordsInput from "./common/KeywordsInput";
import RichTextEditor from "./common/RichTextEditor";

const WriteBlogForm = ({ categories }: { categories: ICategory[] }) => {
  const [title, setTitle] = useState<string>("");
  const [slug, setSlug] = useState<string>("");
  const [isCategoriesOpen, setIsCategoriesOpen] = useState<boolean>(false);

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newTitle = event.target.value;
    setTitle(newTitle);
    setSlug(slugify(newTitle));
  };

  const slugify = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]+/g, "-") // Replace non-alphanumeric characters with hyphens
      .replace(/^-+/, "") // Remove leading hyphens
      .replace(/-+$/, ""); // Remove trailing hyphens
  };

  return (
    <div>
      <form className="flex flex-col w-full gap-2 mx-auto font-normal">
        <div className="w-full flex gap-8">
          <div className="w-full flex-1">
            <label htmlFor="title" className="block mt-5">
              Title{" "}
              <span className="text-red-500 dark:text-cyan-400 -ml-1">*</span>
            </label>
            <input
              name="title"
              id="title"
              placeholder="enter your blog title"
              className="w-2/4 bg-[#ffffff] dark:bg-[#090D1F] dark:border-[#bdbdbd6f] border-[#ccc] border-2 outline-none rounded-md px-2 py-2 transition-all duration-300 bg-white-after-focus font-normal"
              value={title}
              onChange={handleTitleChange}
              required
            />
          </div>
          <div className="w-full flex-[0.7] opacity-80 hidden">
            <label htmlFor="slug" className="block mt-5">
              Slug
            </label>
            <input
              name="slug"
              id="slug"
              placeholder="slug"
              className="w-full bg-[#ffffff] dark:bg-[#090D1F] dark:border-[#bdbdbd6f] border-[#ccc] border-2 outline-none rounded-md px-2 py-2 transition-all duration-300 bg-white-after-focus font-normal cursor-default text-purple-400"
              value={slug}
              readOnly
            />
          </div>
        </div>
        <label htmlFor="body" className="block mt-5">
          Body <span className="text-red-500 dark:text-cyan-400 -ml-1">*</span>
        </label>
        <div className="mb-16">
          <RichTextEditor />
        </div>
        <div className="flex gap-2 justify-between">
          <div className="flex-[0.7]">
            <KeywordsInput />
          </div>
          <div>
            <button
              type="button"
              className="w-[300px] bg-gray-50 dark:bg-[#090D1F] dark:border-[#bdbdbd6f] border-[#ccc] border-2 outline-none rounded-md px-2 py-1 transition-all duration-300 flex items-center justify-between font-medium relative"
              onClick={() => setIsCategoriesOpen((prev) => !prev)}
            >
              Categories
              <div
                className={`${
                  isCategoriesOpen && "rotate-180"
                } transition-all duration-200 ease-in-out`}
              >
                <RiArrowDropDownLine size={30} />
              </div>
            </button>
            {isCategoriesOpen && (
              <div className="absolute w-[300px] my-2">
                <ul className="bg-gray-100 border-[2px] rounded-lg dark:bg-gray-900  dark:border-gray-900 h-[300px] overflow-scroll">
                  {categories.map((category: ICategory, index: number) => {
                    return (
                      <li
                        key={index}
                        className="font-normal bg-slate-50 px-2 py-2 cursor-pointer hover:bg-gray-200 dark:bg-[#090D1F] dark:hover:bg-gray-500 transition-all duration-200 ease-in-out"
                      >
                        {category.attributes.title}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-between gap-2 h-fit">
          <div className="flex-[0.7]">
            <label htmlFor="short description" className="block mt-5">
              Short Description
              <span className="text-red-500 dark:text-cyan-400">*</span>
            </label>
            <textarea
              name="short description"
              id="short description"
              placeholder="enter short description for blog cover"
              className="w-full bg-[#ffffff] dark:bg-[#090D1F] dark:border-[#bdbdbd6f] border-[#ccc] border-2 outline-none rounded-md px-2 py-2 transition-all duration-300 bg-white-after-focus font-normal resize-none"
              rows={10}
            />
          </div>
          <div className="">
            <ImageInput />
          </div>
        </div>
      </form>
    </div>
  );
};

export default WriteBlogForm;
