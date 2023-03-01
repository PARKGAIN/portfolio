"use client";
import React from "react";
import { ThemeProvider } from "next-themes";
import Navbar from "../components/Navbar";
import { visibility } from "../context/context";
import CardView from "../components/CardView";
React.useLayoutEffect = React.useEffect;

function Page() {
  return (
    <div>
      <ThemeProvider attribute="class">
        <Navbar visibility={visibility} />
        <CardView/>
      </ThemeProvider>
    </div>
  );
}

export default Page;
