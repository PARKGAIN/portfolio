"use client";
import React, { useState } from "react";
import { ThemeProvider } from "next-themes";
import Navbar from "../components/Navbar";
import MainLetter from "../components/MainLetter";
function Page() {
  const [visibility, setVisibility] = useState(false);
  const [text, setText] = useState([
    "안녕하세요",
    "신입 프론트엔드 개발자",
    "PARKGAIN 입니다",
  ]);

  return (
    <ThemeProvider attribute="class">
      <Navbar visibility={!visibility} />
      <MainLetter text={text} />
    </ThemeProvider>
  );
}

export default Page;
