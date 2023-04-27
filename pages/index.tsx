import Header from "components/Header";
import Projects from "components/Projects";
import "../app/globals.css";

const Page = () => {
  return (
    <div className="background">
      <div className="page_container">
        <Header />
        <Projects />
      </div>
    </div>
  );
};

export default Page;
