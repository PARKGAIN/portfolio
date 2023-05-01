import React from "react";
import { Card } from "antd";
import Image from "next/image";
import { motion } from "framer-motion";

const { Meta } = Card;

const About = () => {
  return (
    <motion.div animate={{ y: [80, 0] }} transition={{ delay: 0.8 }}>
      <Card
        hoverable
        style={{ width: 280 }}
        cover={<Image src={"/profile.jpg"} alt={"my profile"} />}
      >
        <Meta description="긍정적인 가치를 전하고 싶은 개발자 박가인입니다" />
      </Card>
    </motion.div>
  );
};

export default About;
