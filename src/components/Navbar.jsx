import React from "react";
import { Link } from "react-scroll";
import { ArrowRightIcon } from "@heroicons/react/solid";

function Navbar() {
  return (
    <header className="bg-gray-200 md:sticky top-0 z-50">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link className="title-font font-medium  mb-4 md:mb-0">
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="ml-3 text-xl cursor-pointer"
          >
            Nik Ahmad Izzat
          </Link>
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <Link
            to="project"
            smooth={true}
            duration={500}
            className="mr-5 text-gray-600 hover:text-gray-800 cursor-pointer font-medium text-lg"
          >
            Past Work
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="mr-5 text-gray-600 hover:text-gray-800 cursor-pointer font-medium text-lg"
          >
            Skills
          </Link>
        </nav>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded-md text-lg mt-4 md:mt-0 text-white cursor-pointer"
        >
          Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
