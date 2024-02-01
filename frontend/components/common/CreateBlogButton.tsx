import React from "react";
import { IoIosCreate } from "react-icons/io";

const CreateBlogButton = () => {
  // Available to only authenticated users
  return (
    <button className="flex items-center gap-2 font-bold text-xl border-2 rounded-md px-4">
      Create
      <IoIosCreate size={35} />
    </button>
  );
};

export default CreateBlogButton;
