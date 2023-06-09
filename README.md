# 🙌 포트폴리오

입사지원시 제출할 포트폴리오 사이트를 직접 만들고 싶어서 개발하였으며, 사용자의 피드백을 받아서 유지보수 하고 있는 사이트입니다. PWA를 적용하여 어플리케이션처럼 브라우저에서 다운로드 받아서 사용하실 수 있습니다.

### 🛠 기술스택 

- Nextjs v13
- TypeScript
- JavaScript
- Framer-motion
- Antd

### 🚩 프로젝트의 목표

- SSR을 통한 검색엔진 최적화

- 디자인 측면에서 개발 생산성 증가

- 사용자 경험 개선

### 🙆‍♀️ 프로젝트 하면서 해결한 문제

useEffect등을 사용하면 "use client"를 선언해야하고 결국에 서버사이드 렌더링이 되지 않아서 컴포넌트에서 상태관리를 어떻게 할지 생각하다가 useReducer로 useState를 대체할 수 있다는 것을 알게되었습니다. 검색기능을 구현할 때 useReducer를 사용하여 projectPage 컴포넌트에서 Projects라는 컴포넌트(프로젝트 목록)로 내려줄 data의 상태를 관리할 수 있었습니다. 

### 🎨 UI (<a href="https://parkgain.tistory.com/55#https://www.parkgaini.com/_(%EC%A0%9C_%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4_%EC%82%AC%EC%9D%B4%ED%8A%B8%EC%9E%85%EB%8B%88%EB%8B%A4.)" style="text-decoration : none; font-size:20px; color : white;">UI 개선시 고려한 점</a>)

- 현재
<div align="center">
<img src="https://user-images.githubusercontent.com/84880886/235331760-31a8f65f-395f-445f-86d6-ed7cf7486a97.gif"/>
</div>

- 1st UI
<br/>
<div align="center">
<img src="https://user-images.githubusercontent.com/84880886/222048556-73d47abf-3690-4d09-ba77-14e40c269dc1.jpg" width="600"/>
<img src="https://user-images.githubusercontent.com/84880886/222048563-bc1e1e01-543e-464e-822f-b378257f8b5c.jpg" width="600"/>
</div>

- 2nd UI
<br/>
<div align="center">
<img src="https://user-images.githubusercontent.com/84880886/226880887-db25ab91-8266-4591-a240-39e40c66b956.jpg" width="600"/>
<img src="https://user-images.githubusercontent.com/84880886/235331727-85309043-13cb-441f-93e6-f5258bec9986.jpg" width="600"/>
</div>



#### 성능측정결과
<div align="center">
<img src="https://github.com/PARKGAIN/portfolio/assets/84880886/e0e18df9-9e02-4e5c-94fa-9b4b2fa61fae" width="600"/>
</div>
