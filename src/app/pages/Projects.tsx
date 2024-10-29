"use client";
import React from "react";
import dronePhoto from "@/app/projectimages/dronephot.jpeg";
import Codepen from "@/app/projectimages/Codepen.png";
import stock from "@/app/projectimages/stock.jpg";
import rice from "@/app/projectimages/oryza.jpg";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/componentsb/ui/3d-card";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

const handleExploreClick1= () => {
    window.open("https://github.com/CodifyAT/Genomic-Prediction-Of-Oryza-Sativa-Traits-using-Machine-Learning", "_blank"); // Opens Wikipedia in a new tab
  };

  const handleExploreClick2= () => {
    window.open("https://github.com/CodifyAT/Stock-Market-Trend-Prediction-using-Deep-Learning", "_blank"); // Opens Wikipedia in a new tab
  };

  const handleExploreClick3= () => {
    window.open("https://github.com/CodifyAT/CodePen-React-Clone", "_blank"); // Opens Wikipedia in a new tab
  };

  const handleExploreClick4= () => {
    window.open("https://github.com/CodifyAT/Pesticide-Drone-Automation-", "_blank"); // Opens Wikipedia in a new tab
  };

const Projects = () => {
  const { scrollYProgress } = useScroll(); // Get scroll progress
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]); // Fade in from 0 to 1

  return (
    
    <motion.div
    className="mt-[200px] px-auto"
    style={{ opacity }} // Bind opacity to scroll position
    initial={{ opacity: 0 }} // Initial opacity
    animate={{ opacity: 1 }} // Animate to full opacity (not necessary since it's controlled by scroll)
    transition={{ duration: 2 }} // Transition duration
  >
      <h1 className="text-center lg:text-5xl sm:text-4xl font-sans font-bold text-white">
        Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-1">
        <CardContainer className="inter-var">
          <CardBody className="bg-slate-950 border-x-white  border-y-white relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-white font-bold font-mono pb-4"
            >
              Genomic Prediction of Oryza Sativa Traits
            </CardItem>
            <CardItem as="p" translateZ="60" className="text-white font-mono">
              Leveraging Power of Machine Learning to find out Traits of Rice just by its Genomic sequence.
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={rice}
                height="1000"
                width="1000"
                className="h-60  w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between  text-white items-center mt-20">
              <CardItem
                translateZ={20}
                as={Link}
                href="https://agrigen.onrender.com"
                target="__blank"
                className="px-4 py-2 rounded-xl  bg-white dark:bg-white text-black text-xs font-normal dark:text-white"
              >
                Link to Website→
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                target="__blank"
                onClick={handleExploreClick1} // Add onClick handler
                className="px-4 py-2 rounded-xl bg-white dark:bg-white text-black text-xs font-bold"
              >
                GitHub Link
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var">
          <CardBody className="bg-slate-950 border-x-white  border-y-white relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-white font-bold font-mono pb-4"
              
            >
              Stock Trend Prediction using Neural Networks
            </CardItem>
            <CardItem as="p" translateZ="60" className="text-white font-mono">
            Using Neural Networks to Predict Stock Trends just by its ticker and date.
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={stock}
                height="1000"
                width="1000"
                className="h-60  w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between text-white items-center mt-20">
              <CardItem
                translateZ={20}
                as={Link}
                href="https://stocktrend-vrxt.onrender.com"
                target="__blank"
                className="px-4 py-2  bg-white dark:bg-white text-black rounded-xl text-xs font-normal dark:text-white"
                
              >
                Link to Website→
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                target="__blank"
                onClick={handleExploreClick2} // Add onClick handler
                className="px-4 py-2 rounded-xl bg-white dark:bg-white text-black text-xs font-bold"
              >
                GitHub Link
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
      <CardContainer className="inter-var">
          <CardBody className="bg-slate-950 border-x-white  border-y-white relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-white font-bold font-mono pb-4"
            >
              Code Pen Clone
            </CardItem>
            <CardItem as="p" translateZ="60" className="text-white font-mono">
              Cloned a CodePen using ReactJs providing a dynamic online platform to compile HTML,CSS,JS.
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={Codepen}
                height="1000"
                width="1000"
                className="h-60  w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as={Link}
                href="https://codifyat.github.io/CodePen-React-Clone/"
                target="__blank"
                className="px-4  bg-white dark:bg-white text-black py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                Link to Website→
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                
                target="__blank"
                onClick={handleExploreClick3} // Add onClick handler
                className="px-4 py-2 rounded-xl bg-white dark:bg-white text-black text-xs font-bold"
              >
                GitHub Link
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var">
          <CardBody className="bg-slate-950 border-x-white  border-y-white relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-white font-bold font-mono pb-4"
            >
              Pesticide Drone Automation
            </CardItem>
            <CardItem as="p" translateZ="60" className="text-white font-mono">
             Provided an extensive platform to map and automate Pesticide Spraying Drone throughout the desired field.
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={dronePhoto}
                height="1000"
                width="1000"
                className="h-60  w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as={Link}
                href=""
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal bg-white dark:bg-white text-black  dark:text-white"
              >
                Link to Website→
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                target="__blank"
                onClick={handleExploreClick4} // Add onClick handler
                className="px-4 py-2 rounded-xl bg-white dark:bg-white text-black text-xs font-bold"
              >
                GitHub Link
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>
    </motion.div>
  );
};

export default Projects;
