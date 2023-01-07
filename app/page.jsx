"use client";
import React from "react";
import { Noto_Sans_KR } from "@next/font/google";
import { ThemeProvider } from "next-themes";
import Navbar from "../components/Navbar";

const noto_sans_kr = Noto_Sans_KR({
  weight: ["500"],
});

function Page() {
  return (
    <ThemeProvider attribute="class">
      <Navbar />
      <div className={noto_sans_kr}>
        Frontend Developer <br /> PARK GA IN
      </div>
    </ThemeProvider>
  );
}

export default Page;
