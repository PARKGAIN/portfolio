import Projects from "components/Projects";
import "./index.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Link from "next/link";
import data from "data/projects";
import { useCallback, useReducer } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Project } from "types/types";

const ProjectPage = () => {
  function reducer(state: Project[], action: any) {
    switch (action.type) {
      case "CHANGE_INPUT":
        const filteredData = data.filter(
          (project) =>
            project.title
              .toLowerCase()
              .includes(action.payload.toLowerCase()) ||
            project.description
              .toLowerCase()
              .includes(action.payload.toLowerCase()) ||
            project.techstack
              .toLowerCase()
              .includes(action.payload.toLowerCase())
        );
        return filteredData;
      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(reducer, data);

  const onSearch = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "CHANGE_INPUT",
      payload: event.target.value,
    });
  }, []);

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
