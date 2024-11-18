"use client"; // Indicate that this is a Client Component

import React, { useState } from 'react';
import { motion } from "framer-motion";

const proglang = ['C', 'C++', 'Java', 'JavaScript', 'Python', 'SQL', 
  'AWS', 'Docker', 'Jenkins', 'Eclipse',
  'Express.js', 'React.js', 'Node.js', 'Flask', 'Bootstrap', 'MaterialUI',
  'Pandas', 'NumPy', 'Matplotlib', 'Keras', 'TensorFlow',
  'Git', 'GitHub', 'MERN Stack', 'NextJs', 'TailWind CSS'];

const interests = ['Photography', 'Chess', 'Travelling', 'Audio-Mixing'];

const TechStacks = () => {
  const [downloaded, setDownloaded] = useState(false); // State to track if the resume has been downloaded

  const resumedownload = () => {
    const link = document.createElement('a');
    link.href = 'https://raw.githubusercontent.com/CodifyAT/Portfolio/dd6eaa609a1b80ea9c9e17aa5e536cc1ae51b2f6/Atharva_Tiwari_resume.pdf'; // Correct raw URL
    link.download = 'Resume.pdf'; // Specify the filename you want to give the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Set the state to true to show the message
    setDownloaded(true);
  };

  return (
    <motion.div
      className='lg:mr-[200px] lg:ml-[200px] sm:ml-[20px] mt-[120px] text-white'
      initial={{ opacity: 0 }} // Initial opacity
      animate={{ opacity: 1 }}  // Animate to full opacity
      transition={{ duration: 2 }}
    >
      <h1 className='text-white lg:text-4xl sm:text-4xl font-bold'>Details</h1>
      <div className='mt-10 justify-center relative grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-10'>
        <div className='lg:border-r-2 sm:border-0'>
          <div className='border-[1px] px-10 border-slate-500 lg:rounded-[10px] sm:rounded-none mr-10 lg:mr-10 sm:ml-0 sm:mr-0 p-4'>
            <h1 className='font-bold text-2xl mt-4 mb-6 lg:ml-[20px] sm:ml-0'>Stack</h1>
            <div className='px-2 relative flex flex-wrap'>
              {proglang.map((word, index) => (
                <span key={index} className='bg-gray-900 px-3 mt-2 mb-2 mx-3 text-gray-300 rounded'>
                  {word}
                </span>
              ))}
            </div>
            <h1 className='font-bold text-2xl mt-4 mb-6 ml-[20px]'>Interests</h1>
            <div className='px-2 mb-5 flex flex-wrap'>
              {interests.map((word, index) => (
                <span key={index} className='bg-gray-900 px-3 mt-2 mb-2 mx-3 text-gray-300 rounded'>
                  {word}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div>
          <h1 className='font-semibold text-2xl mt-4 mb-6 ml-[20px]'>Education</h1>
          <div className='ml-6'>
            <span className='font-extralight text-2xl'>
              <h1>Keshav Memorial Institute of Technology</h1>
              <h1 className='text-xl mb-10 text-gray-400 italic'>2021 - 2025</h1>
              <h1 className="text-xl">
                Currently pursuing a Bachelor&apos;s of Technology in Computer Science Engineering, where I am deeply engaged in the dynamic world of technology. I continually explore a wide range of emerging technologies, from artificial intelligence and machine learning to web development and cloud computing. My journey involves not only mastering theoretical concepts but also applying them in real-world projects, fostering innovation and problem-solving skills. I am passionate about creating impactful solutions that address real-world challenges and enhance user experiences.
              </h1>
            </span>
          </div>
        </div>
      </div>
      <div className='text-center text-2xl'>
        <button
          onClick={resumedownload}
          className="mt-10 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-10 pt-10 pb-10 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-200 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          My Resume
        </button>
        {downloaded && <p className='text-white mt-4'>Resume has been downloaded!</p>}
      </div>
    </motion.div>
  );
}

export default TechStacks;
