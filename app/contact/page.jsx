"use client";
import { PencilIcon } from "@heroicons/react/24/outline";
import React from "react";
import { ContactUs } from "../../components/ContactUs";
import Navbar from "../../components/Navbar";
import Image from "next/image";
function page() {
  return (
    <div>
      <Navbar />
      <Image alt="github" src="/github-mark.png" width={50} height={50} />
      <PencilIcon width={50} />
      <ContactUs />
    </div>
  );
}
// href="https://github.com/PARKGAIN"
export default page;
