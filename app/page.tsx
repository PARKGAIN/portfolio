"use client";
import React, { useState } from "react";
import Script from "next/script";
import Nav from "../components/Nav/Nav";
import "../app/globals.css";
import data from "../data/projects";
import About from "../components/About/About";
import Card from "../components/Projects/Card";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Contact from "../components/Contact/Contact";
import Head from "next/head";

const Page = () => {
  const [index, setIndex] = useState(0);
  const slideLeft = () => {
    if (index - 1 >= 0) {
      setIndex(index - 1);
    }
  };

  const slideRight = () => {
    if (index + 1 <= data.length - 1) {
      setIndex(index + 1);
    }
  };
  return (
    <>
      <Head>
        <title>프론트엔드 개발자 박가인 포트폴리오</title>
        <meta property="og:parkgain" content="프론트엔드 개발자 포트폴리오" />
      </Head>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-36GQRC58RX" />
      <Script id="google-analytics">
        {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-36GQRC58RX');
      `}
      </Script>
      <div>
        <Nav />
      </div>
      <section id="projects" className="background">
        <div className="card-container flex">
          <BiChevronLeft
            className="left slide-icons"
            onClick={slideLeft}
            size={30}
          />
          {data.map((data, n) => {
            let position =
              n > index ? "nextCard" : n === index ? "activeCard" : "prevCard";
            return <Card {...data} cardStyle={position} />;
          })}
          <BiChevronRight
            className="right slide-icons"
            onClick={slideRight}
            size={30}
          />
        </div>
      </section>
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default Page;
