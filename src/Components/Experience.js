import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import Education from "./Education";
import ExperienceComp from "./ExperienceComp";

function Experience() {
  return (
    <div className="p-6 bg-gray-900">
      <div className="flex space-x-2 justify-center mb-10">
        <FontAwesomeIcon icon={faCircle} style={{ color: "#ffcc6c" }} />
        <FontAwesomeIcon icon={faCircle} style={{ color: "#ffcc6c" }} />
        <FontAwesomeIcon icon={faCircle} style={{ color: "#ffcc6c" }} />
      </div>

      <div className="ml-20 grid grid-flow-row gap-8 lg:grid-flow-col">
        <div>
          <ExperienceComp />
        </div>
        <div>
          <Education />
        </div>
      </div>
    </div>
  );
}

export default Experience;
