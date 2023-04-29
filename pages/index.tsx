import Contact from "components/Contact/Contact";
import Header from "components/Header";
import "../app/globals.css";
import { Button, Space } from "antd";
import About from "components/About/About";

const Page = () => {
  return (
    <div className="background">
      <div className="page_container flex-container">
        <Header />
        <Space wrap>
          <Button type="primary" href="/projects">
            포트폴리오 보기
          </Button>
        </Space>
        <About />
        <Contact />
      </div>
    </div>
  );
};

export default Page;
