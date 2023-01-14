"use client";
import React from "react";
import { ThemeProvider } from "next-themes";
import Navbar from "../components/Navbar";
import MainLetter from "../components/MainLetter";

function Page() {
  return (
    <div>
      <ThemeProvider attribute="class">
        <Navbar />
        {[0, 1, 2].map((index) => (
          <MainLetter key={index} index={index} />
        ))}
      </ThemeProvider>
    </div>
  );
}

export default Page;
