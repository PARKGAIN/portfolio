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
    <div className="flex place-content-center mb-16">
      <div>
        <DiJavascript1 size={100} />
        <h3 className="text-center">Javascript</h3>
      </div>
      <div>
        <DiReact size={100} />
        <h3 className="text-center">React</h3>
      </div>
      <div>
        <DiNodejsSmall size={100} />
        <h3 className="text-center">Node.js</h3>
      </div>
      <div>
        <DiMysql size={100} />
        <h3 className="text-center"> MySQL</h3>
      </div>
      <div>
        <DiLinux size={100} />
        <h3 className="text-center"> Linux</h3>
      </div>
    </div>
  );
}

export default TechStackIcons;
