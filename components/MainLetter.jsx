"use client";
import React from "react";
import font from "../fonts/font";
import AOS from "aos";
import "aos/dist/aos.css";
function MainLetter({ text }) {
  AOS.init();
  return (
    <>
      {text.map((e, i) => {
        return (
          <div
            key={e}
            className={`${font} text-4xl text-center center mt-80 mb-96`}
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            {text[i]}
          </div>
        );
      })}
    </>
  );
}

export default MainLetter;
