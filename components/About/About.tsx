import React from "react";
import "../About/About.css";
import Image from "next/image";
import { nanum_gothic } from "../../fonts/font";
import {
  DiReact,
  DiNodejsSmall,
  DiMysql,
  DiJavascript1,
  DiMongodb,
} from "react-icons/di";

const About = ({ isMobile }: any) => {
  return (
    <div className="about-container">
      <div className="width-100">
        <Image
          src="/profile.jpg"
          alt="프로필이미지"
          className={isMobile ? "mobile-img" : "about-img"}
        />
      </div>
      <div className="width-100">
        <p
          className={
            isMobile
              ? `mobile-txt ${nanum_gothic.className}`
              : `about-txt mb-8 ${nanum_gothic.className}`
          }
        >
          안녕하세요, 박가인입니다.저는 커뮤니케이션과 협업을 중요하게
          생각합니다.항상 새로운 기술과 동향에 관심을 가지며, 끊임없이 학습하는
          것을 좋아합니다. 저의 포트폴리오 웹사이트에 방문해 주셔서 감사합니다.
        </p>
        <div className="mt-10">
          기술스택 :
          <DiJavascript1 size={isMobile ? 20 : 40} />
          <DiReact size={isMobile ? 20 : 40} />
          <DiNodejsSmall size={isMobile ? 20 : 40} />
          <DiMysql size={isMobile ? 20 : 40} />
          <DiMongodb size={isMobile ? 20 : 40} />
        </div>
      </div>
    </div>
  );
};

export default About;
