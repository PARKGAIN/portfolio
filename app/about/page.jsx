"use client";
import React from "react";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import TechStackIcons from "../../components/TechStackIcons";
import { ThemeProvider } from "next-themes";
import { visibility } from "../../context/context";
import AboutTxt from "../../components/AboutTxt";

function Page() {
  return (
    <div>
      <ThemeProvider attribute="class">
        <Navbar visibility={visibility} />
        <Image src="/profile.png" alt="myprofileimg" width={200} height={300} />
        <AboutTxt />
        <h3 className="text-center">기술스택</h3>
        <TechStackIcons />
      </ThemeProvider>
    </div>
  );
}

export default Page;
