"use client";
import React from "react";
import { ThemeProvider } from "next-themes";
import Navbar from "../components/Navbar";
import MainLetter from "../components/MainLetter";
import { visibility } from "../context/context";
import Btn from "../components/Btn";
import Contact from "../components/Contact";
function Page() {
  return (
    <div>
      <ThemeProvider attribute="class">
        <Navbar visibility={visibility} />
        <MainLetter />
        <Contact />
        <Btn />
      </ThemeProvider>
    </div>
  );
}

export default Page;
