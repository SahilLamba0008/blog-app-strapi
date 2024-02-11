import { getKeywordClasses } from "@/utils/functions";
import React, { useState } from "react";
import { MdAdd } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const KeywordsInput = () => {
  const placeholderTags: string[] = ["Blog", "Mental Health", "Reading"];
  const [tags, setTags] = useState<string[]>(placeholderTags);
  const [tagName, setTagName] = useState<string>("");

  const handleEnterClick = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (tagName.trim() !== "") {
        setTags([...tags, tagName.trim()]);
        setTagName("");
      }
    }
  };

  const handleTagDelete = (tagIndex: number) => {
    const updatedTags = [...tags];
    updatedTags.splice(tagIndex, 1);
    setTags(updatedTags);
  };

  return (
    <div>
      <div className="flex gap-1">
        <input
          type="text"
          name="keywords"
          id="keywords"
          placeholder="keywords (max. 3-4 keywords allowed)"
          className="w-full bg-[#ffffff] dark:bg-[#090D1F] dark:border-[#bdbdbd6f] border-[#ccc] border-2 outline-none rounded-md px-2 py-2 transition-all duration-300 flex items-center justify-between font-normal"
          onKeyDown={handleEnterClick}
          value={tagName}
          onChange={(e) => setTagName(e.target.value)}
        />
        <button
          type="button"
          className="bg-gray-600 dark:bg-purple-700 border-2 border-gray-400 dark:border-purple-400 text-white dark:text-purple-200 px-2 rounded-md"
        >
          <MdAdd size={25} />
        </button>
      </div>
      <div className="flex gap-2 mt-2 flex-wrap">
        {tags.map((tag, index) => (
          <div
            key={index}
            className={`flex items-center gap-2 px-2 py-1  rounded-md cursor-default text-[16px] ${getKeywordClasses(
              tag.length
            )}`}
          >
            {tag}
            <span
              className="inline-block cursor-pointer  hover:bg-red-500 border-2 border-white/0 hover:border-red-200 hover:text-white rounded-md p-[1px] transition-all duration-200 ease-in-out"
              onClick={() => handleTagDelete(index)}
            >
              <IoMdClose size={18} />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeywordsInput;
