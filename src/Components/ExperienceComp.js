import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
function ExperienceComp() {
  return (
    <div>
        <div className="text-left pb-5 text-3xl font-serif">Experience</div>
        <div className="justify-start text-left border-l-2 pl-4">
          <div>
            {" "}
            <FontAwesomeIcon
              className="absolute left-4 ml-20 lg:left-3.5"
              icon={faCircle}
              style={{ color: "#ffcc6c" }}
            />{" "}
            <div className="font-bold">Jr Softawre Engineer</div>
          </div>
          <div className="text-sm">April 2023-Current</div>
          <div className="text-sm">Neova Solutions, Pune</div>
          <div className="text-sm">Skills: java, spring boot, microservices, javascript, react js, swing, spring core, spring mvc, java 8, Bit bucket, Git</div>
        </div>
        <div className="justify-start text-left border-l-2 pl-4">
          <div>
            {" "}
            <FontAwesomeIcon
              className="absolute left-4 ml-20 lg:left-3.5"
              icon={faCircle}
              style={{ color: "#ffcc6c" }}
            />{" "}
            <div className="font-bold">Java Full Stack Intern</div>
          </div>
          <div className="text-sm">March 2022- June 2022</div>
          <div className="text-sm">Cognizant, Pune</div>
          <div className="text-sm">Skills: java, maven, spring core, spring mvc, Spring boot</div>
        </div>
        <div className="justify-start text-left border-l-2 pl-4">
          <div>
            {" "}
            <FontAwesomeIcon
              className="absolute left-4 ml-20 lg:left-3.5"
              icon={faCircle}
              style={{ color: "#ffcc6c" }}
            />{" "}
            <div className="font-bold">Data Science Intern</div>
          </div>
          <div className="text-sm">May 2022-June 2022</div>
          <div className="text-sm">Virtual Internship</div>
          <div className="text-sm">Skills: Python, Numpy, Pandas</div>
        </div>
    </div>
  )
}

export default ExperienceComp