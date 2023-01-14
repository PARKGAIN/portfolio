"use client";
import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import TechStackIcons from "../../components/TechStackIcons";
function Page() {
  // const [visibility, setVisibility] = useState(false);
  return (
    <div>
      <Navbar />
      안녕하세요 개발을 좋아하는 가인입니다. 기술스택
      <Image src="/profile.png" alt="myprofileimg" width={200} height={300} />
      <TechStackIcons />
    </div>
  );
}

export default Page;
