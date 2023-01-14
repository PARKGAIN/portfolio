"use client";
import React, { useState, useRef } from "react";
import font from "../fonts/font";
import { motion, useScroll, useTransform } from "framer-motion";

function MainLetter({ index }) {
  const [text, setText] = useState([
    "안녕하세요",
    "트로트엔 송가인",
    "연예인 한가인",
    "저는 개발하는 박가인입니다",
  ]);

  return (
    <div>
      <motion.div className={`${font} text-4xl text-center center `}>
        <br />
        {text[index]}
      </motion.div>
    </div>
  );
}

export default MainLetter;
