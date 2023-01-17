"use client";
import { PencilIcon } from "@heroicons/react/24/outline";
import React from "react";
import { ContactUs } from "../../components/ContactUs";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import { visibility } from "../../context/context";
function page() {
  return (
    <div>
      <Navbar visibility={!visibility} />
      <Image alt="github" src="/github-mark.png" width={50} height={50} />

      <PencilIcon width={50} />
      <h4>Contact me by email</h4>
      <ContactUs />
    </div>
  );
}

export default page;
// href="https://github.com/PARKGAIN?tab=repositories"
