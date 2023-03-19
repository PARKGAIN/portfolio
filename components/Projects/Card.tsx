import React from "react";
import Image from 'next/image'
import {open_sans} from "../../fonts/font"
import "../Projects/Projects.css"


const Card = ({image,title,description,techstack,reference,cardStyle} : any) => {
    return (
      <div className={`card ${cardStyle}`}>
        <Image className='portfolio_img margin-auto' src={image} alt="프로젝트 이미지" width={400} height={230} />
        <h3 className='line-height'>{title}</h3>
        <div className={`line-height ${open_sans.className}`}> 설명 : {description}</div>
        <div className={`line-height ${open_sans.className}`}>기술 스택 : {techstack}</div>
        <div className={`line-height ${open_sans.className}`}> 참고한 자료 : {reference}</div>
      </div>
    );
  };
  
  export default Card;