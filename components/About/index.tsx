import { Card } from "antd";
import Image from "next/image";
import { motion } from "framer-motion";
import "./index.css";

const { Meta } = Card;

const About = () => {
  return (
    <motion.div
      animate={{ y: [80, 0] }}
      transition={{ delay: 0.8 }}
      style={{ margin: "0 auto" }}
    >
      <Card
        hoverable
        style={{ width: 307, marginTop: "30px", marginBottom: "13px" }}
        cover={<Image src={"/profile.jpg"} alt={"my profile"} sizes={"300"} />}
      >
        <Meta
          description="긍정적인 가치를 전하고 싶은 개발자 박가인입니다.<br/>지속가능한 개발자가 되는 것이 목표입니다."
          className="txt"
        />
      </Card>
    </motion.div>
  );
};

export default About;
