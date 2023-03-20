import React from "react";
import "../About/About.css";
import Image from "next/image";
import { PencilIcon } from "@heroicons/react/24/outline";
import { goUrl } from "../../utils/goUrl";
const About = () => {
  return (
    <div className="about-container">
      <Image
        src="/profile.jpg"
        alt="프로필이미지"
        className="about-img"
        width={350}
        height={380}
      />
      <p className="about-txt">
        안녕하세요, 박가인입니다. 웹 개발에 대한 열정과 끊임없는 학습에 자부심을
        가진 신입 프론트엔드 개발자입니다.저는 커뮤니케이션과 협업을 중요하게
        생각합니다.항상 새로운 기술과 동향에 관심을 가지며, 끊임없이 학습하는
        것을 좋아합니다. 프론트엔드 개발자로서 높은 품질의 코드 작성과 개발
        생산성 향상에 주력하고 있습니다. 저의 포트폴리오 웹사이트를 방문해
        주셔서 감사합니다.
      </p>
      <PencilIcon
        width={40}
        onClick={() => goUrl("https://parkgain.tistory.com")}
        className="cursor-pointer"
      />
      {/* 깃허브, 블로그 링크, 기술스택 */}
    </div>
  );
};

export default About;
