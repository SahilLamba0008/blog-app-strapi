import React from "react";

const LoadingSkeleton = () => {
  return (
    <div className="grid grid-cols-3 gap-12 mt-6 max-w-[1440px] mx-auto">
      {Array.from({ length: 6 }, (_, index) => {
        return (
          <div
            className="w-full h-full flex flex-col justify-center"
            key={index}
          >
            {/* Placeholder for image */}
            <div className="bg-gray-300 dark:bg-gray-700 rounded-lg h-[220px] w-full animate-pulse"></div>
            {/* Placeholder for metadata */}
            <div className="bg-gray-300 dark:bg-gray-700 rounded-lg h-[20px] w-2/4 animate-pulse mt-1"></div>
            <div className="flex gap-2">
              <div className="bg-gray-300 dark:bg-gray-700 rounded-lg h-[20px] w-full animate-pulse mt-1 flex-1"></div>
              <div className="bg-gray-300 dark:bg-gray-700 rounded-lg h-[20px] w-full animate-pulse mt-1 flex-[0.1]"></div>
            </div>
            <div className="bg-gray-300 dark:bg-gray-700 rounded-lg h-[20px] w-full animate-pulse mt-1"></div>
            <div className="bg-gray-300 dark:bg-gray-700 rounded-lg h-[20px] w-full animate-pulse mt-1"></div>
            <div className="bg-gray-300 dark:bg-gray-700 rounded-lg h-[20px] w-3/4 animate-pulse mt-1"></div>
            <div id="keywords" className="flex gap-2">
              <div className="bg-gray-300 dark:bg-gray-700 rounded-lg h-[30px] w-2/4 animate-pulse mt-1"></div>
              <div className="bg-gray-300 dark:bg-gray-700 rounded-lg h-[30px] w-2/4 animate-pulse mt-1"></div>
              <div className="bg-gray-300 dark:bg-gray-700 rounded-lg h-[30px] w-2/4 animate-pulse mt-1"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LoadingSkeleton;
