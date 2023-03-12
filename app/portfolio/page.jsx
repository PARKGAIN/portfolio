"use client";
import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import CardView from "../../components/CardView";
import { ThemeProvider } from "next-themes";
import { visibility } from "../../context/context";
import Script from "next/script";
function Page() {
  return (
    <div>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-36GQRC58RX"/>
      <Script id="google-analytics">  
      {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-36GQRC58RX');
      `
      }
      </Script>
      <ThemeProvider attribute="class">
        <Navbar visibility={!visibility} />
        <CardView />
      </ThemeProvider>
    </div>
  );
}

export default Page;
