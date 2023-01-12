"use client";
import { PencilIcon } from "@heroicons/react/24/outline";
import React from "react";
import GithubIcon from "../../components/GithubIcon";
import Navbar from "../../components/Navbar";
function page() {
  return (
    <div>
      <Navbar /> page
      <GithubIcon />
      <PencilIcon width={50} />
    </div>
  );
}

export default page;
