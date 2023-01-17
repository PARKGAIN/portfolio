"use client";
import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import TechStackIcons from "../../components/TechStackIcons";
import { ThemeProvider } from "next-themes";
import { visibility } from "../../context/context";

function Page() {
  return (
    <div>
      <ThemeProvider attribute="class">
        <Navbar visibility={visibility} />
        <Image src="/profile.png" alt="myprofileimg" width={200} height={300} />
        기술스택
        <TechStackIcons />
      </ThemeProvider>
    </div>
  );
}

export default Page;
