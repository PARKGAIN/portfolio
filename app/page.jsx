"use client";
import React from "react";
import CardView from "../components/CardView";
import ScrollspyNav from "react-scrollspy-nav";
React.useLayoutEffect = React.useEffect;
import Script from 'next/script'

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
      <ScrollspyNav
        scrollTargetIds={["section_1", "section_2", "section_3"]}
        offset={100}
        activeNavClass="is-active"
        scrollDuration="1000"
        headerBackground="true">
        <ul className="flex">
          <li><a href="#section_1">Projects</a></li>
          <li><a href="#section_2">About</a></li>
          <li><a href="#section_3">Contact</a></li>
      </ul>
      </ScrollspyNav>
      <div>
          <div id="section_1" style={{"height": "1300px"}}><CardView/></div>
          <div id="section_2" style={{"height": "500px"}}><span>Section 2</span></div>
          <div id="section_3" style={{"height": "500px"}}>Contact</div>
      </div>
    </div>
  );
}

export default Page;
