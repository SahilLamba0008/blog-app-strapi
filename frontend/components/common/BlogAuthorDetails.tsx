import { IAuthor } from "@/lib/types";
import Image from "next/image";
import React from "react";
import { LuDot } from "react-icons/lu";
import { IoShareSocialOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { BsSave2 } from "react-icons/bs";
import ToolTip from "./Tooltip";

const BlogAuthorDetails = ({
  category,
  author,
  blogPublishedDays,
}: {
  category: string;
  author: IAuthor;
  blogPublishedDays: string;
}) => {
  return (
    <div className="flex w-full justify-between items-center mt-4 px-1">
      <div className="flex gap-4 items-center">
        <Image
          src={"/images/user.jpg"}
          alt="user"
          height={250}
          width={250}
          className="h-[60px] w-[60px] object-cover rounded-full"
        />
        <div className="flex flex-col cursor-default">
          <div className="flex items-center gap-2 font-author">
            <p className="font-semibold">{author.data.attributes.username}</p>
            <p id="sepator">
              <LuDot />
            </p>
            <p className="text-green-500 underline underline-offset-2 decoration-white dark:decoration-[#060713] hover:decoration-green-500 transition-all duration-200 ease-in-out cursor-pointer">
              follow
            </p>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-gray-400">
              Published in{" "}
              <span className="text-purple-500 font-medium">{category}</span>
            </p>
            <p id="sepator">
              <LuDot />
            </p>
            <p className="text-gray-400">{blogPublishedDays} days ago</p>
          </div>
        </div>
      </div>
      <div>
        <button className="mr-4 hover:text-red-500 transition-all duration-200">
          <ToolTip message="Like">
            <FaRegHeart size={24} />
          </ToolTip>
        </button>
        <button className="mr-4 hover:text-cyan-500 transition-all duration-200">
          <ToolTip message="Share">
            <IoShareSocialOutline size={25} />
          </ToolTip>
        </button>
        <button className="hover:text-yellow-500 transition-all duration-200">
          <ToolTip message="Save">
            <BsSave2 size={24} />
          </ToolTip>
        </button>
      </div>
    </div>
  );
};

export default BlogAuthorDetails;
