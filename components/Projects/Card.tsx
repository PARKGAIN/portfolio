import React from "react";
import Image from "next/image";
import { open_sans } from "../../fonts/font";
import { goUrl } from "../../utils/goUrl";
import { DiGithubBadge } from "react-icons/di";
import "../Projects/Projects.css";

const Card = ({
  image,
  title,
  description,
  techstack,
  reference,
  cardStyle,
  githublink,
}: any): JSX.Element => {
  return (
    <div className={`card ${cardStyle}`}>
      <Image
        className="portfolio_img margin-auto"
        src={image}
        alt="프로젝트 이미지"
        width={400}
        height={230}
      />
      <h3 className={`${open_sans.className}`}>{title}</h3>
      <br />
      <div className={`line-height text mb-5 ${open_sans.className}`}>
        설명 : {description}
      </div>
      <div className={`mb-5 ${open_sans.className}`}>
        기술 스택 : {techstack}
      </div>
      <div className={`line-height text ${open_sans.className}`}>
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
