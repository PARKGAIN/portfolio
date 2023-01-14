"use client";
import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Image from "next/image";
function Page() {
  // const [visibility, setVisibility] = useState(false);
  return (
    <div>
      <Navbar />
      안녕하세요 개발을 좋아하는 가인입니다. 기술스택
      <Image src="/profile.png" alt="myprofileimg" width={200} height={300} />
    </div>
  );
}

export default Page;
