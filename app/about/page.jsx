"use client";
import React, { useState } from "react";
import Navbar from "../../components/Navbar";
function Page() {
  const [visibility, setVisibility] = useState(false);
  return (
    <div>
      <Navbar visibility={visibility} />
    </div>
  );
}

export default Page;
