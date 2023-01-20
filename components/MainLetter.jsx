"use client";
import React, { useState, useRef } from "react";
import font from "../fonts/font";
import { motion, useScroll, useTransform } from "framer-motion";
import { Cursor, useTypewriter } from "react-simple-typewriter";

function MainLetter() {
  const [text, setText] = useState([
    "",
    "",
    "",
    "송가인, 한가인, 박가인 let's go",
  ]);

  return (
    <div className="m-auto table mt-72">
      <span className={`${font} text-4xl text-center center `}>{text}</span>
    </div>
  );
}

export default MainLetter;
