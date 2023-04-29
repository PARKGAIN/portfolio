import React from "react";
import { Card } from "antd";
import Image from "next/image";

const { Meta } = Card;
const About = () => {
  return (
    <div>
      <Card
        hoverable
        style={{ width: 250 }}
        cover={<Image src={"/profile.jpg"} alt={"my profile"} />}
      >
        <Meta
          title="긍정적인 가치를 전하고 싶은 개발자 박가인입니다"
          description=""
        />
      </Card>
    </div>
  );
};

export default About;
