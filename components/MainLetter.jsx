"use client";
import React, { useState, useRef } from "react";
import font from "../fonts/font";
import { motion, useScroll, useTransform } from "framer-motion";
import { Cursor, useTypewriter } from "react-simple-typewriter";

function MainLetter() {
  const [text, setText] = useTypewriter({
    words: ["안녕하세요", "신입 프론트엔드 개발자", "박가인입니다"],
    loop: false,
    delaySpeed: 1500,
  });

  return (
    <div className="m-auto table mt-72">
      <span className={`${font} text-4xl text-center center `}>{text}</span>
      <Cursor cursorColor="blue text-4xl" />
    </div>
  );
}

export default MainLetter;
