"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../tobeinput/herohighlight";
import ProfilePhoto from "@/app/projectimages/profile2.jpeg";
const SelfIntro = () => {
  return (
    <div className="text-center">
      <HeroHighlight>
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-2xl sm:ml-[150px] px-4 md:text-4xl lg:text-5xl font-bold text-white dark:text-white max-w-4xl leading-relaxed lg:leading-snug  "
        >
          A little bit{" "}
          <Highlight className="text-border text-black dark:text-white">
            About Myself
          </Highlight>
        </motion.h1>
      </HeroHighlight>
      <motion.div className="items-center justify-center relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-1 px-20 pt-20" 
      initial={{ opacity: 0 }} // Initial opacity
      animate={{ opacity: 1 }}  // Animate to full opacity
      transition={{ duration: 2 }} // Duration of the fade-in effect
      
      >
        <div className="flex justify-center items-center">
          <Image
            src={ProfilePhoto}
            alt="Description of the image"
            width={300}
            height={200}
            className="rounded-[20px] mb-10"
          />
        </div>
        <div className="lg:text-xl md:text-sm">
        <h1 className="text-white">
          <span className=" font-extralight pb-10">
            My name is Atharva Tiwari, and I am a budding technology enthusiast, 
            currently pursuing Bachelors of Technology degree in Computer Science Engineering. I am passionate
            about Web Development, Machine Learning, and Artificial
            Intelligence, with a particular focus on building innovative
            solutions that blend these fields.
          </span>
          <br/>
          <br/>
          <span className="font-extralight">
            I enjoy working on both front-end and back-end technologies, and I
            am constantly exploring ways to enhance user experiences through
            responsive design and seamless integration of data-driven
            applications.
          </span>
          <br/>
          <br/>
          <span className=" font-extralight">
          In addition to my core interests I am eager to expand
            my expertise in cloud computing, automation, and DevOps practices. I
            have a keen interest in contributing to open-source projects and
            collaborating with like-minded individuals in the tech community. My
            goal is to continuously learn, adapt to evolving technologies, and
            make meaningful contributions to the tech world.
          </span>
        </h1>
        </div>
      </motion.div>
    </div>
  );
};

export default SelfIntro;
