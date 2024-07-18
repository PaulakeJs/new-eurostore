import React from "react";

function Success({message}) {
  return (
    <div className="p-5">
      <div
        role="alert"
        className="alert flex gap-3 md:max-w-[400px] mx-auto md:mb-3 bg-green-400 text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="stroke-info shrink-0 w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <span>{message}</span>
      </div>
    </div>
  );
}

export default Success;
