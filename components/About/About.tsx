import React from "react";
import "../About/About.css";
import Image from "next/image";

const About = () => {
  return (
    <>
      <Image src="/profile.png" alt="프로필이미지" />
      <p className="container">
        안녕하세요, 박가인입니다. 웹 개발에 대한 열정과 끊임없는 학습에 자부심을
        가지고 있는 신입 프론트엔드 개발자입니다.또한, 커뮤니케이션과 협업을
        중요하게 생각합니다.저는 항상 새로운 기술과 동향에 관심을 가지며,
        끊임없이 학습하는 것을 좋아합니다. 프론트엔드 개발자로서 높은 품질의
        코드 작성과 개발 생산성 향상에 주력하고 있습니다. 저의 포트폴리오
        웹사이트를 방문해 주셔서 감사합니다.
      </p>
      {/* 깃허브, 블로그 링크, 기술스택 */}
    </>
  );
};

export default About;
