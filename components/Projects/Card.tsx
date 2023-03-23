import React from "react";
import Image from "next/image";
import { open_sans } from "../../fonts/font";
import { goUrl } from "../../utils/goUrl";
import { DiGithubBadge } from "react-icons/di";
import "../Projects/Projects.css";

const Card = (
  {
    image,
    title,
    description,
    techstack,
    reference,
    cardStyle,
    githublink,
  }: any,
  { isMobile }: any
): JSX.Element => {
  return (
    <div
      className={isMobile ? `mobile-card ${cardStyle}` : `card ${cardStyle}`}
    >
      <Image
        className={
          isMobile
            ? "mobile-portfolio_img margin-auto"
            : "portfolio_img margin-auto"
        }
        src={image}
        alt="프로젝트 이미지"
      />
      <h3 className={`${open_sans.className}`}>{title}</h3>
      <br />
      <div
        className={
          isMobile
            ? `line-height text mb-5 ${open_sans.className} mobile-text`
            : `line-height text mb-5 ${open_sans.className}`
        }
      >
        설명 : {description}
      </div>
      <div
        className={
          isMobile
            ? `mb-5 ${open_sans.className} mobile-text`
            : `mb-5 ${open_sans.className}`
        }
      >
        기술 스택 : {techstack}
      </div>
      <div
        className={
          isMobile
            ? `line-height text ${open_sans.className} mobile-text`
            : `line-height text ${open_sans.className}`
        }
      >
        참고자료 : {reference}
      </div>
      <DiGithubBadge
        size={30}
        onClick={() => goUrl(`${githublink}`)}
        className="cursor-pointer"
      />
    </div>
  );
};

export default Card;
