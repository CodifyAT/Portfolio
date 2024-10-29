"use client";
import { TypewriterEffectSmooth } from "@/app/components/Typewriter";
export function TypewriterEffectSmoothDemo() {
    const words = [
        {
          text: "My",
          className:"text-white"
        },
        {
          text: "short",
          className:"text-white"
        },
        {
            text: "Photograph",
            className:"text-white"
          },
        {
          text: "Portfolio.",
          className: "text-pink-500 dark:text-pink-500",
        },
      ];
  return (
    <div className="flex flex-col items-center justify-center  ">
      <TypewriterEffectSmooth words={words} />
      <p className=" text-white  sm:text-base  ">
        Please scroll to view
      </p>
    </div>
  );
}
