"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { IoCloudUpload } from "react-icons/io5";
import MyModal from "./modal/MyModal";
const CreateBlogButton = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const isAuth = false; // Available to only authenticated users ------ to be made dynamic later
  const router = useRouter();

  const handleWritePostClick = () => {
    if (isAuth) {
      router.push("/writeblog");
    } else {
      setIsModalOpen((prev) => !prev);
    }
  };

  return (
    <>
      <button
        className="flex gap-2 items-center font-bold text-xl  bg-gradient-to-r from-indigo-500 from-0% via-sky-500 via-80% to-emerald-400 hover:to-100% rounded-md py-2 px-4 text-white transition-all duration-300 relative focus:ring-4 dark:focus:ring-white/20"
        onClick={handleWritePostClick}
      >
        Write a Post
        <IoCloudUpload size={25} />
      </button>
      {isModalOpen && <MyModal setIsModalOpen={setIsModalOpen} />}
    </>
  );
};

export default CreateBlogButton;
