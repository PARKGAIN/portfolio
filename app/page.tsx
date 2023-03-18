"use client"
import React from "react";
import Script from 'next/script'
import ScrollSpy from "react-ui-scrollspy";
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
      <Nav/>
      <ScrollSpy>
        <div id="projects">
         <Projects projects={projects}/>
        </div>
        <div id="about">
          <About/>
        </div>
      </ScrollSpy>
    </>
  );
}

export default Page;
