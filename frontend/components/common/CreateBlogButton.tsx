"use client";
import React from "react";
import { IoCloudUpload } from "react-icons/io5";

const CreateBlogButton = () => {
  // Available to only authenticated users
  return (
    <button className="flex gap-2 items-center font-bold text-xl bg-gradient-to-r from-indigo-500 from-0% via-sky-500 via-70% to-emerald-400 hover:to-100% rounded-md py-2 px-4 text-white transition-all duration-300 relative ">
      Write a Post
      <IoCloudUpload size={25} />
    </button>
  );
};

export default CreateBlogButton;
