import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar";
import Landing from "../components/Landing";
import About from "../components/About";
// import Projects from "../components/Projects";
// import Contact from "../components/Contact";
// import Footer from "../components/Footer";

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }
  
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavBar isOpen={isOpen} toggle={toggle} />
      <Landing />
      <About />
      {/* 
      <Projects />
      <Contact />
      <Footer /> */}
    </>
  );
}

export default Home;