"use client";
import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import CardView from "../../components/CardView";
import { ThemeProvider } from "next-themes";
import { visibility } from "../../context/context";
function Page() {
  const [themeSwitchVisibility, setThemeSwitchVisibility] = useState(true);
  return (
    <div>
      <ThemeProvider attribute="class">
        <Navbar visibility={!visibility} />
        <CardView />
      </ThemeProvider>
    </div>
  );
}

export default Page;
