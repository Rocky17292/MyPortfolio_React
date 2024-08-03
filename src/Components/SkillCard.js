import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SkillCard({ icon, text, color }) {
  return (
    <div
      className="rounded-xl p-4 flex flex-col justify-center items-center transition-transform transform hover:scale-105 shadow-lg hover:shadow-xl"
      style={{ backgroundColor: "#3D3E42", minHeight: "120px" }}
    >
      <FontAwesomeIcon icon={icon} className="text-4xl mb-2" style={{ color: color }} />
      <div className="text-xs text-white">{text}</div>
    </div>
  );
}

export default SkillCard;
