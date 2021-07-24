import React from "react";
import NavBar from "./components/NavBar.js";
import Landing from "./components/Landing.js";
import About from "./components/About.js";
import Projects from "./components/Projects.js";
import Contact from "./components/Contact.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <div className="App">
      <Landing />
      <NavBar />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
