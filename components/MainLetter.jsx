"use client";
import React from "react";
import { nanum_gothic } from "../fonts/font";
import { Cursor, useTypewriter } from "react-simple-typewriter";

function MainLetter() {
  const text = "Hi, I am Ga In~🖐";

  const [name, setName] = useTypewriter({
    words: ["송가인, 한가인 ,박가인", "let's go"],
    delaySpeed: 1000,
    loop: 1,
  });

  return (
    <div className="m-auto table mt-72">
      <span
        className={`${nanum_gothic.className} text-[30px] sm:text-[50px] md:text-[70px] sm:leading-[55px] md:leading-[70px]  leading-[43px] `}
      >
        {text}
      </span>
      <div className="mt-1">
        <span className="text-base">{name}</span>
        <Cursor />
      </div>
    </div>
  );
}

export default MainLetter;
