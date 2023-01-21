import React from "react";
import { noto_sans_korean } from "../fonts/font";

function AboutTxt() {
  return (
    <div className="w-7/12 m-auto mb-16">
      <p className={`${noto_sans_korean.className} leading-relaxed text-lg`}>
        다국적 기술 기업 Alibaba Group (알리바바 그룹) 의 공동 창립자인 마윈은
        알리바바 창립 전에 영어교사를 그만 두고 미국에 가서 인터넷을 접한 뒤,
        인터넷의 잠재력을 알게 되고 중국으로 돌아오자마자 친구와 함께 웹사이트를
        구축합니다
        <br />
        이러한 마윈 회장의 이야기는 고등학교에서 영어 교사로 근무했었던 제게 큰
        감명을 주었습니다 마윈 회장은 개발자보다는 CEO에 가깝지만 영어교사출신인
        저도 열정을 가지고 일하면 개발자로 성공할 수 있겠다는 자신감이
        생겼습니다
        <br />
        영어교사로 근무하는 동안 휴일에 온라인강의를 들으며 코틀린으로
        어플리케이션을 만들며 프로그래밍에 흥미를 느껴 좋은 서비스를 만드는
        개발자가 되기로 결심하였습니다
      </p>
    </div>
  );
}

export default AboutTxt;
