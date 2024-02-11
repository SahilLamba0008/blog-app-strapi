import React from "react";

const ImageInput = () => {
  return (
    <div className="w-full h-full">
      <label htmlFor="image" className="block mt-5">
        Upload Thumbnail
        <span className="text-red-500 dark:text-cyan-400">*</span>
      </label>
      {/* <input
        type="file"
        name="image"
        id="image"
        accept="image/png, image/jpeg, image/svg, image/gif, image/tiff, image/ico, image/dvu, image/jpg"
      /> 
      <div className="mt-1 text-sm text-green-500 dark:text-cyan-500">
        Allowed file types: .jpeg, .png, .gif, .svg, .tiff, .ico, .dvu
      </div> */}
      <div className="flex items-center justify-center w-full">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-[#090D1F] hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-[#131728]"
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
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF (MAX. 800x400px)
            </p>
          </div>
          <input id="dropzone-file" type="file" className="hidden" />
        </label>
      </div>
    </div>
  );
};

export default ImageInput;
