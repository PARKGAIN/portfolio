import React from "react";
import {
  DiReact,
  DiNodejsSmall,
  DiMysql,
  DiJavascript1,
  DiLinux,
} from "react-icons/di";
function TechStackIcons() {
  return (
    <div className="flex">
      <DiReact size={100} />
      <DiJavascript1 size={100} />
      <DiNodejsSmall size={100} />
      <DiMysql size={100} />
      <DiLinux size={100} />
    </div>
  );
}

export default TechStackIcons;
