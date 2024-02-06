"use client";
import Image from "next/image";
import React from "react";
import { IoClose } from "react-icons/io5";
import { GrLinkNext } from "react-icons/gr";
import Link from "next/link";

const MyModal = ({ setIsModalOpen }: { setIsModalOpen: any }) => {
  return (
    <>
      <div
        id="modal-bg"
        className="fixed h-full w-full bg-black/10 backdrop-blur-sm z-20 top-0 left-0"
        onClick={() => setIsModalOpen((prev: any) => !prev)}
      />
      <div
        id="modal-wrapper"
        className="bg-white dark:bg-[#101427] text-black dark:text-white w-[600px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-8 px-8 rounded-lg z-50 flex flex-col items-center"
      >
        <div className="w-full text-2xl font-bold border-l-4 pl-2 border-black/20 dark:border-purple-300/40 flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src={"/images/attention.png"}
              alt="attention"
              height={500}
              width={500}
              className="object-cover h-10 w-8 mr-2"
            />
            <h1>Attention</h1>
          </div>
          <button
            className="border-2 rounded-md bg-red-500 border-red-700 text-white transition-all duration-300 focus:ring-4 focus:ring-red-300"
            onClick={() => setIsModalOpen((prev: any) => !prev)}
          >
            <IoClose size={28} />
          </button>
        </div>
        <p className="text-xl mt-4 text-center">
          Ready to share your thoughts?{" "}
          <span className="font-bold">Log in </span>now to begin writing your
          blogs
        </p>
        <Image
          src={"/images/login-m.png"}
          alt={"login first to write a blog"}
          height={500}
          width={400}
          className="object-contain"
        />
        <div className="flex gap-4 items-center justify-center">
          <Link href={"/auth"}>
            <button
              className="px-4 py-2 bg-black text-white dark:bg-white ring-2 dark:text-black rounded-md border-2 border-black/60 transition-all duration-300 focus:ring-4 focus:ring-black/40 dark:focus:ring-white/70 flex items-center gap-1"
              onClick={() => setIsModalOpen((prev: any) => !prev)}
            >
              Login Now <GrLinkNext size={20} />
            </button>
          </Link>
          <button
            className="px-4 py-2 rounded-md border-2 bg-red-500 border-red-700 text-white transition-all duration-300 focus:ring-4 focus:ring-red-300"
            onClick={() => setIsModalOpen((prev: any) => !prev)}
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
};

export default MyModal;
