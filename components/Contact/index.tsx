import Link from "next/link";
import { nanum_gothic } from "../../fonts/font";
import { SlEnvolope } from "react-icons/sl";
import { PencilIcon } from "@heroicons/react/24/outline";
import { Card } from "antd";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div animate={{ y: [80, 0] }} transition={{ delay: 1.0 }}>
      <Card style={{ width: 340 }}>
        <h3 className={nanum_gothic.className}>contact</h3>
        <br />
        <Link href="mailto:pgi082247@gmail.com">
          <SlEnvolope size={29} />
          <span style={{ fontSize: "16px" }}> pgi082247@gmail.com</span>
        </Link>
        <br />
        <Link href="https://parkgain.tistory.com/">
          <PencilIcon width={29} />
          <span style={{ fontSize: "16px" }}>
            https://parkgain.tistory.com/
          </span>
        </Link>
      </Card>
    </motion.div>
  );
};

export default Contact;
