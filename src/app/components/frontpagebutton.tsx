"use client";
import React from "react";

export function TailwindcssButtons() {
  return (
    <div className="pb-40 text-center px-4 w-full">
      <button className="p-[3px] relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
        <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
            Scroll Down to explore
        </div>
        </button>
    </div>
  );
}