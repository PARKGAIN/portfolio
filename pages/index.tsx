import Contact from "components/Contact";
import Header from "components/Header";
import "./index.css";
import { Button, Space } from "antd";
import About from "components/About";
import { NextSeo } from "next-seo";

const Page = () => {
  return (
    <>
      <NextSeo
        title="박가인 포트폴리오"
        description="개발자 포트폴리오 "
        openGraph={{
          type: "website",
          url: "parkgaini.com",
          title: "박가인 포트폴리오",
          description: "개발자 박가인 포트폴리오",
        }}
      />
      <div className="background">
        <div className="page_container flex-container">
          <Header />
          <Space wrap>
            <Button type="primary" href="/projects">
              포트폴리오 보러가기
            </Button>
          </Space>
          <About />
          <Contact />
        </div>
      </div>
    </>
  );
};

export default Page;
