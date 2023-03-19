import React from 'react'
import Image from 'next/image';
import "../Projects/Projects.css"
import {open_sans,nanum_gothic} from "../../fonts/font"

function Projects({projects} : any): JSX.Element {
  return (
  <div className='background-color'>
    <div className='container margin-auto'>
          {projects.map((e: string,i: number)=>{
              return(
              <div className='item_container' key={e}>
                  <Image className='portfolio_img margin-auto' src={projects[i].image} alt="프로젝트 이미지" width={400} height={230} />
                  <br/>
                  <h3 className='line-height'>{projects[i].title}</h3>
                  <br/>
                  <div className={`line-height ${open_sans.className}`}> 설명 : {projects[i].description}</div>
                  <br/>
                  <div className={`line-height ${open_sans.className}`}>기술 스택 : {projects[i].techstack}</div>
                  <br/>
                  <div className={`line-height ${open_sans.className}`}> 참고한 자료 : {projects[i].reference}</div>
              </div>)})}   
              </div>
            </div>
  )
}

export default Projects