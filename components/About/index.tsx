import { Card } from "antd";
import Image from "next/image";
import { motion } from "framer-motion";
import "./index.css";

const { Meta } = Card;

const About = () => {
  const descriptionArr = [
    "개발생산성을 높이기 위해 노력하는 개발자 박가인입니다.",
  ];

  return (
    <motion.div
      animate={{ y: [80, 0] }}
      transition={{ delay: 0.8 }}
      style={{ margin: "0 auto" }}
    >
      <Card
        hoverable
        style={{ width: 305, marginTop: "29px", marginBottom: "13px" }}
        cover={
          <Image
            src={"/profile.jpg"}
            alt={"my profile"}
            sizes={"300"}
            width={300}
            height={250}
          />
        }
      >
        <Meta
          description={descriptionArr.map((desc) => (
            <p key={`${desc}-`}>{desc}</p>
          ))}
          className="txt"
        />
      </Card>
    </motion.div>
  );
};

export default About;
