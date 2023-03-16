"use client"
import React from "react";
import Script from 'next/script'
import ScrollSpy from "react-ui-scrollspy";
import Nav from "../components/Nav/Nav";
import Projects from "../components/Projects/Projects";
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
        <div id="first">
         <Projects/>
        </div>
        <div id="second">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolores
          veritatis doloremque fugit. Soluta aperiam atque inventore deleniti,
          voluptatibus non fuga eos magni natus vel, rerum excepturi expedita.
          Tempore, vero!
        </div>
      </ScrollSpy>
    </>
  );
}

export default Page;
