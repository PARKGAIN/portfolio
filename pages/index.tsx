import Contact from "components/Contact/Contact";
import Header from "components/Header";
import "../app/globals.css";

const Page = () => {
  return (
    <div className="background">
      <div className="page_container">
        <Header />
        <Contact />
      </div>
    </div>
  );
};

export default Page;
