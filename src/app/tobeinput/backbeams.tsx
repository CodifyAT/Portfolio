import React from "react";
import { BackgroundBeamsWithCollision } from "@/app/components/backgroundbeams";

export function BackgroundBeamsWithCollisionDemo() {
  return (
    <div>
    <BackgroundBeamsWithCollision>
      <h2 className=" mt-20 text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-white font-sans tracking-tight">
        Heyy there !!{" "}
        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
          </div>
        </div>
        <div className="relative bg-clip-text text-transparent bg-no-repeat text-white py-4">
            <span className="">My name is  
            <span className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4"> Atharva Tiwari</span>
            </span>
          </div>
          <span className="text-2xl font-mono">Welcome to my portfolio</span>
      </h2>
      
    </BackgroundBeamsWithCollision>
    </div>
  );
}