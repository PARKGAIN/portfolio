"use client";
import React from "react";
import Image from "next/image";
import TechStackIcons from "../../components/TechStackIcons";
import { ThemeProvider } from "next-themes";
import AboutTxt from "../../components/AboutTxt";

function Page() {
  return (
    <div>
      <ThemeProvider attribute="class">
        <h3 className="text-2xl uppercase top-24 text-gray-500 text-center mb-12 mt-6">
          About
        </h3>
        <Image
          src="/profile.png"
          alt="myprofileimg"
          width={200}
          height={300}
          className="mb-20 w-56 h-56 rounded-full object-cover md:rounded-lg m-auto"/>
        <AboutTxt />
        <h3 className="text-center mb-1">기술스택</h3>
        <TechStackIcons />
      </ThemeProvider>
    </div>
  );
}

export default Page;
