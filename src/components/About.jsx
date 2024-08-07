import React from "react";
import { Link } from "react-scroll";

const PDF_FILE_URL =
  "https://izzatportfolio.netlify.app/Nik-Ahmad-Izzat-Resume.pdf";

function About() {
  const downloadFileAtURL = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium ">
            Hello, I'm Nik Ahmad Izzat.
            <br />
            <br className="hidden lg:inline-block" />I have a passion for
            developing innovative solutions.
          </h1>
          <p className=" text-lg mb-8 leading-relaxed text-justify">
            A motivated Computer Science student at Universiti Teknologi Mara
            have an experience in Web, Mobile Development and Database
            Management. I thrive in collaborative environments and would like to
            apply my skillsets for internship in the fields of Software
            Development, Data Analysis, and Cybersecurity. I am thrilled to
            contribute towards innovative projects and thus, learn from industry
            professionals.
          </p>
          <div className="flex justify-center">
            <Link
              to="contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg cursor-pointer"
              smooth={true}
              duration={500}
            >
              Work With Me
            </Link>
            <Link
              to="project"
              className="ml-4 inline-flex text-gray-200 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg cursor-pointer"
              smooth={true}
              duration={500}
            >
              See My Past Work
            </Link>
            <button
              onClick={() => {
                downloadFileAtURL(PDF_FILE_URL);
              }}
              className="ml-4 inline-flex text-gray-200 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg cursor-pointer"
            >
              My Resume
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center  rounded-custom"
            alt="hero"
            src="https://izzatportfolio.netlify.app/me7.png"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
