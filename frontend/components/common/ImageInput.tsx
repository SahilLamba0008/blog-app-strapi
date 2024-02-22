import Image from "next/image";
import React, { useState } from "react";

const ImageInput = () => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];

    if (!file.type.match("image/")) {
      alert("Only image files are allowed!");
      return;
    }

    setImageFile(file);
    setIsDragging(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) {
      return; // Handle the case where no file is selected
    }

    if (!file.type.match("image/")) {
      alert("Only image files are allowed!");
      return;
    }

    setImageFile(file);
  };

  return (
    <div className="w-full h-full">
      <label htmlFor="image" className="block mt-5">
        Upload Thumbnail
        <span className="text-red-500 dark:text-cyan-400">*</span>
      </label>
      <div
        className={`flex items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-[#090D1F] ${
          isDragging ? "hover:bg-gray-500 dark:hover:bg-[#131728]" : ""
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-full"
        >
          <div className="flex flex-col items-center justify-center px-4 pt-5 pb-6 min-w-[300px]">
            <svg
              className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Allowed file types: .jpeg, .png, .gif, .svg, .tiff, .ico, .dvu
            </p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            onChange={handleChange}
          />
        </label>
      </div>
      {/* Display selected image if any */}
      {imageFile && (
        <div className="mt-4 w-full  rounded-lg overflow-hidden">
          <Image
            src={URL.createObjectURL(imageFile)}
            alt="Selected Image"
            height={300}
            width={300}
          />
        </div>
      )}
    </div>
  );
};

export default ImageInput;
