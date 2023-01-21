"use client";
import React from "react";
import { ThemeProvider } from "next-themes";
import Navbar from "../components/Navbar";
import MainLetter from "../components/MainLetter";
import { visibility } from "../context/context";

import Contact from "../components/Contact";
import Snowfall from "react-snowfall";
React.useLayoutEffect = React.useEffect;
function Page() {
  return (
    <div>
      <ThemeProvider attribute="class">
        <Navbar visibility={visibility} />
        <Snowfall />
        <MainLetter />
        <Contact />
      </ThemeProvider>
    </div>
  );
}

export default Page;
