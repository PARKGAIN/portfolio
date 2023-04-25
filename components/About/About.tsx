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
          안녕하세요, 세상에 긍정적인 영향을 주는 소프트웨어를 만드는 개발자가
          되는 것이 목표인 박가인입니다. 코로나 펜데믹 상황에서 코로나맵과 같은
          사이트가 코로나 확산을 방지하는 것을 보고 프로그래밍이 세상을 바꿀 수
          있겠다는 생각을 했습니다. 커뮤니케이션과 협업을 어떻게 잘할 수 있을 지
          연구중이며 항상 새로운 기술과 동향에 관심을 가지며, 끊임없이 학습하는
          것을 좋아합니다. 저의 포트폴리오 웹사이트에 방문해 주셔서 감사합니다.
        </p>
        <div className="mt-15">
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
