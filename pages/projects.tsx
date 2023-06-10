import Projects from "components/Projects";
import "./index.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import useProjectSearch from "hooks/useProjectSearch";
import data from "data/projects";

const ProjectPage = () => {
  const { state, onSearch } = useProjectSearch(data);

  return (
    <div className="background">
      <div className="page_container">
        <Link href={"/"}>
          <AiOutlineArrowLeft size={20} color={"gray"} />
        </Link>
        <AiOutlineSearch size={17} style={{ marginLeft: "10px" }} />
        <input
          placeholder="Enter your search term"
          onChange={onSearch}
          style={{
            width: "215px",
            padding: "6px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        />
        <Projects data={state} />
      </div>
    </div>
  );
};

export default ProjectPage;
