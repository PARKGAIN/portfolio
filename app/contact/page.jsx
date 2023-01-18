"use client";
import { PencilIcon } from "@heroicons/react/24/outline";
import React from "react";
import { ContactMe } from "../../components/ContactMe";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import { visibility } from "../../context/context";
function page() {
  const goGithub = () => {
    window.open("https://github.com/PARKGAIN");
  };
  const goBlog = () => {
    window.open("https://parkgain.tistory.com");
  };
  return (
    <div>
      <Navbar visibility={!visibility} />
      <div className="m-auto table">
        깃허브
        <span className="w-12 h-12 inline-flex items-center justify-center bg-neutral-300 rounded-full ">
          <Image
            alt="github"
            src="/github-mark.png"
            width={50}
            height={50}
            onClick={goGithub}
            className="cursor-pointer"
          />
        </span>
        블로그
        <span className="w-12 h-12 inline-flex items-center justify-center bg-neutral-300 rounded-full ">
          <PencilIcon width={40} onClick={goBlog} className="cursor-pointer" />
        </span>
        <h3>Send me an email</h3>
        <ContactMe />
      </div>
    </div>
  );
}

export default page;
