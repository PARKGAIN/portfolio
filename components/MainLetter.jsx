"use client";
import React, { useState, useRef } from "react";
import font from "../fonts/font";
import { motion, useScroll, useTransform } from "framer-motion";

function MainLetter({ index }) {
  const [text, setText] = useState([
    "안녕하세요",
    "신입 프론트엔드 개발자",
    "PARKGAIN 입니다",
  ]);
  const ref = useRef();
  function useParallax(value, distance) {
    return useTransform(value, [0, 1], [-distance, distance]);
  }
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 200);
  return (
    <div ref={ref}>
      <motion.div
        style={{ y }}
        className={`${font} text-4xl text-center center mt-80 mb-96`}
      >
        <br />
        <br />
        {text[index]}
        <br />
      </motion.div>
    </div>
  );
}

export default MainLetter;
