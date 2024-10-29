"use client";
import { useState } from "react";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}

        {/* Hamburger Button for Mobile */}
        <button
          className="text-white block lg:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Links for Desktop */}
        <div
          className={`lg:flex lg:items-center lg:w-full ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col lg:flex-row lg:justify-between lg:w-full mt-4 lg:mt-0 text-2xl font-mono">
            <li className="flex-grow">
             =
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;