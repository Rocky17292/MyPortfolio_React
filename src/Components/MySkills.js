import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faLeaf } from "@fortawesome/free-solid-svg-icons";
import {
  faJava,
  faReact,
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faBootstrap,
  faBitbucket,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import SkillCard from "./SkillCard";

const skills = [
  { icon: faJava, text: "Java", color: "#5382A1" },
  { icon: faLeaf, text: "Spring", color: "#6DB33F" },
  { icon: faLeaf, text: "MongoDB", color: "#589636" },
  { icon: faReact, text: "React.js", color: "#61DAFB" },
  { icon: faHtml5, text: "HTML", color: "#E34F26" },
  { icon: faCss3Alt, text: "CSS", color: "#1572B6" },
  { icon: faJsSquare, text: "JavaScript", color: "#F7DF1E" },
  { icon: faBootstrap, text: "Bootstrap", color: "#7952B3" },
  { icon: faReact, text: "React Native", color: "#61DAFB" },
  { icon: faCss3Alt, text: "Tailwind CSS", color: "#38B2AC" },
  { icon: faBitbucket, text: "Bitbucket", color: "#205081" },
  { icon: faGithub, text: "Git", color: "#000000" },
];

function MySkills() {
  return (
    <div className="p-6 bg-gray-900">
      <div className="flex space-x-2 justify-center mb-10">
        <FontAwesomeIcon icon={faCircle} style={{ color: "#ffcc6c" }} />
        <FontAwesomeIcon icon={faCircle} style={{ color: "#ffcc6c" }} />
        <FontAwesomeIcon icon={faCircle} style={{ color: "#ffcc6c" }} />
      </div>

      <div>
        <div className="font-serif mb-10 text-center text-3xl text-white">My Skills</div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 m-10 lg:pr-20 lg:pl-20">
        {skills.map((skill, index) => (
          <SkillCard key={index} icon={skill.icon} text={skill.text} color={skill.color} />
        ))}
      </div>
    </div>
  );
}

export default MySkills;
