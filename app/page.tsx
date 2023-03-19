"use client"
import React from "react";
import Script from 'next/script'
import Nav from "../components/Nav/Nav";
import Projects from "../components/Projects/Projects";
import projects from "../data/projects"
import About from "../components/About/About";

function Page() {
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
      <section id="about">
        <Projects projects={projects}/>
        </section>
        <section id="services">
        <About/>
        </section>
    </>
  );
}

export default Page;
