import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Project from "./components/Project";

export default function App() {
  return (
    <main className="text-slate-900 bg-slate-50 body-font">
      <Navbar />
      <About />
      <Project />
      <Skills />
      <Contact />
    </main>
  );
}
