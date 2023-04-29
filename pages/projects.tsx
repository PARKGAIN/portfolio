import Projects from "components/Projects";
import "../app/globals.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Link from "next/link";

const ProjectPage = () => {
  return (
    <div className="background">
      <div className="page_container">
        <Link href={"/"}>
          <AiOutlineArrowLeft size={20} />
        </Link>
        <Projects />
      </div>
    </div>
  );
};

export default ProjectPage;
