"use client"
import React,{useState} from "react";
import Script from 'next/script'
import Nav from "../components/Nav/Nav";
import "../app/globals.css"
import data from "../data/projects"
import About from "../components/About/About";
import Card from "../components/Projects/Card";
import { BiChevronLeft,BiChevronRight } from "react-icons/bi";
function Page() {
  const [index, setIndex] = useState(0);
  const slideLeft = () => {
    setIndex(index - 1);
};

const slideRight = () => {
    setIndex(index + 1);
};
  return (
    <>
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
      {/* 자기소개,작업물,기술스택,블로그,인증서,수료증 */}
      <div>
      <Nav/>
      </div>
      <section id="about" className="background-color">
        <div className="flex card-container">
        <BiChevronLeft className="slide-icons"  onClick={slideLeft}/>
        {data.map((data,n)=>{
          let position = n > index? "nextCard" : n === index?
          "activeCard" : "prevCard";
          return <Card {...data} cardStyle={position}/>})}
          <BiChevronRight className="slide-icons"  onClick={slideRight}/>
        </div>
        </section>
        <section id="services">
          <About/>
        </section>
    </>
  );
}

export default Page;
