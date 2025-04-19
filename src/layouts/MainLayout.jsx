import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MainLayout = ({ children, onThemeToggle }) => {
  return (
    <>
      <Navbar onThemeToggle={onThemeToggle} />
      <main className="max-w-5xl mx-auto px-4 space-y-32">{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
