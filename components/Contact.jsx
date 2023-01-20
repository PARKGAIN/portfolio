import React from "react";
import { PencilIcon } from "@heroicons/react/24/outline";
import { SlEnvolope } from "react-icons/sl";
import { goUrl } from "../utils/goUrl";
import { DiGithubBadge } from "react-icons/di";
function Contact() {
  return (
    <div className="mt-12">
      <div className="m-auto table">
        <h2 className="mb-12 text-center text-xl">☎ contact ☎</h2>
        <div className="flex">
          <div className="mr-7 hover:text-blue-400">
            <span className="w-12 h-12 inline-flex items-center justify-center bg-neutral-300 rounded-full ">
              <DiGithubBadge
                size={50}
                onClick={() => goUrl("https://github.com/PARKGAIN")}
                className="cursor-pointer"
              />
            </span>
            <h2>Github</h2>
          </div>
          <div className="mr-7 hover:text-blue-400">
            <span className="w-12 h-12 inline-flex items-center justify-center bg-neutral-300 rounded-full ">
              <PencilIcon
                width={40}
                onClick={() => goUrl("https://parkgain.tistory.com")}
                className="cursor-pointer"
              />
            </span>
            <h2>&nbsp; Blog</h2>
          </div>
          <div className="hover:text-blue-400">
            <span className="w-12 h-12 inline-flex items-center justify-center bg-neutral-300 rounded-full ">
              <SlEnvolope
                size={40}
                onClick={() => {
                  window.location = "mailto:pgi082247@gmail.com";
                }}
                className="cursor-pointer"
              />
            </span>
            <h2>&nbsp;Email</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
