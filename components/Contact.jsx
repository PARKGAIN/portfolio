import React from "react";
import Image from "next/image";
import { PencilIcon } from "@heroicons/react/24/outline";
import { SlEnvolope } from "react-icons/sl";
import { goUrl } from "../utils/goUrl";

function Contact() {
  return (
    <div className="mt-12">
      <div className="m-auto table">
        깃허브
        <span className="w-12 h-12 inline-flex items-center justify-center bg-neutral-300 rounded-full ">
          <Image
            alt="github"
            src="/github-mark.png"
            width={50}
            height={50}
            onClick={() => goUrl("https://github.com/PARKGAIN")}
            className="cursor-pointer"
          />
        </span>
        블로그
        <span className="w-12 h-12 inline-flex items-center justify-center bg-neutral-300 rounded-full ">
          <PencilIcon
            width={40}
            onClick={() => goUrl("https://parkgain.tistory.com")}
            className="cursor-pointer"
          />
        </span>
        이메일
        <span className="w-12 h-12 inline-flex items-center justify-center bg-neutral-300 rounded-full ">
          <SlEnvolope size={40} />
        </span>
        유튜브
        <span className="w-12 h-12 inline-flex items-center justify-center bg-neutral-300 rounded-full "></span>
        {/* https://www.youtube.com/channel/UCGXwDVuelZ33wYQ7G9O1TTg */}
      </div>
    </div>
  );
}

export default Contact;
