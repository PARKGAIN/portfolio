"use client";
import React from "react";
import { ThemeProvider } from "next-themes";
import Navbar from "../components/Navbar";
import MainLetter from "../components/MainLetter";
import { visibility } from "../context/context";

import Contact from "../components/Contact";
import Snowfall from "react-snowfall";
React.useLayoutEffect = React.useEffect;
import Script from "next/script";
function Page() {
  return (
    <div>
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-36GQRC58RX"/>
      <Script strategy="afterInteractive">  
      {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-36GQRC58RX');
      `
      }
      </Script>
      <ThemeProvider attribute="class">
        <Navbar visibility={visibility} />
        <Snowfall />
        <MainLetter />
        <Contact />
      </ThemeProvider>
    </div>
  );
}

export default Page;
