"use client";
import React from "react";
import Script from "next/script";
import Nav from "../components/Header/Nav";
import "../app/globals.css";
import data from "../data/projects";
import About from "../components/About/About";
import Card from "../components/Projects/Card";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Contact from "../components/Contact/Contact";
import Head from "next/head";
import { useMediaQuery } from "react-responsive";

const Page = () => {
  let index = 0;
  const slideLeft = () => {
    if (index - 1 >= 0) {
      index -= 1;
    }
  };

  const slideRight = () => {
    if (index + 1 <= data.length - 1) {
      index += 1;
    }
  };

  const isMobile: boolean = useMediaQuery({
    query: "(max-width:767px)",
  });

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
        <div
          className={
            isMobile ? "mobile-card-container flex" : "card-container flex"
          }
        >
          <BiChevronLeft
            className="left slide-icons"
            onClick={() => slideLeft()}
            size={30}
          />
          {data.map((data, n) => {
            let position =
              n > index ? "nextCard" : n === index ? "activeCard" : "prevCard";
            // eslint-disable-next-line react/jsx-key
            return <Card {...data} isMobile={isMobile} cardStyle={position} />;
          })}
          <BiChevronRight
            className="right slide-icons"
            onClick={() => slideRight()}
            size={30}
          />
        </div>
      </section>
      <section id="about">
        <About isMobile={isMobile} />
      </section>
      <section id="contact">
        <Contact isMobile={isMobile} />
      </section>
    </>
  );
};

export default Page;
