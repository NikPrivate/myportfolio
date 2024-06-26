import React, { useState } from "react";

function Contact() {
  return (
    <section id="contact">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/place?q=430,+Jalan+Warisan+Puteri+A13,+Taman+Warisan+Puteri,+70400+Seremban,+Negeri+Sembilan&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1 text-indigo-400">
                430, Jalan Warisan Puteri A13, Taman Warisan Puteri,
                <br />
                70400 Seremban, Negeri Sembilan
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-400 leading-relaxed">
                nikizzat0309@gmail.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed text-indigo-400">019-4009974</p>
            </div>
          </div>
        </div>
        <form
          netlify
          name="contact"
          action="/contact"
          method="post"
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
        >
          <h2 className="sm:text-4xl text-3xl mb-1 font-medium title-font">
            Hire Me
          </h2>
          <p className="text-lg">
            Please provide your feedback on my personal website. If you are
            interested in hiring me, feel free to leave a message
          </p>
          <br />
          <div className="relative mb-4">
            <label for="name" className=" leading-7 text-base font-medium">
              Name
            </label>
            <input type="hidden" name="form-name" value="contact" />
            <input
              required
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-300 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label for="email" className="leading-7 text-base font-medium">
              Email
            </label>
            <input
              required
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-300 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label hfor="message" className="leading-7 text-base font-medium">
              Message
            </label>
            <textarea
              required
              id="message"
              name="message"
              className="w-full bg-gray-300 border py-2 px-3 border-gray-700 focus:border-indigo-500 hover:bg-gray-350 rounded text-lg"
            />
          </div>
          <button
            type="submit"
            className=" bg-blue-400 border-0 py-2 px-6 focus:outline-none hover:bg-blue-500 rounded text-lg font-medium"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
