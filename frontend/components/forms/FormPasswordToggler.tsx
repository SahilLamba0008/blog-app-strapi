"use client";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const FormPasswordToggler = ({
  label,
  input,
}: {
  label: string;
  input: string;
}) => {
  const [passwordType, setPasswordType] = useState("password");

  return (
    <div className="h-full">
      <label htmlFor="password">
        {label} <span className="text-gray-800">*</span>
      </label>
      <div className="flex items-center h-full">
        <input
          type={passwordType}
          id={input}
          name={input}
          className="w-full bg-[#f0f0f0] border-[#BDBDBD] border-2 outline-none rounded-md px-2 py-1 focus:bg-white transition-all duration-300 focus:py-2 bg-white-after-focus"
          placeholder={label}
          required
        />
        <button
          type="button"
          className="bg-[#f0f0f0] border-[#BDBDBD] border-2 rounded-md p-2 cursor-pointer ml-1 active:bg-slate-200 transition-all duration-300"
          onClick={() =>
            setPasswordType(passwordType === "password" ? "text" : "password")
          }
        >
          {passwordType === "password" ? <FaEye /> : <FaEyeSlash />}
        </button>
      </div>
    </div>
  );
};

export default FormPasswordToggler;
