import React, { useState } from "react";
import MainLayout from "./layouts/MainLayout";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleThemeToggle = () => {
    const root = document.documentElement;
    setIsTransitioning(true);

    setTimeout(() => {
      root.classList.toggle("dark");
      setIsTransitioning(false);
      localStorage.setItem("theme", root.classList.contains("dark") ? "dark" : "light");
    }, 300);
  };

  return (
    <div
      id="app-wrapper"
      className={`relative font-sans scroll-smooth transition-opacity duration-300 ${
        isTransitioning ? "opacity-0" : "opacity-100"
      }`}
    >
      <MainLayout onThemeToggle={handleThemeToggle}>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </MainLayout>
    </div>
  );
}

export default App;
