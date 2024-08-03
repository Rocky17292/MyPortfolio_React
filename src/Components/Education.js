import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

function Education() {
  return (
    <div>
      <div className="text-left pb-5 text-3xl font-serif">Education</div>
      <div className="justify-start text-left border-l-2 pl-4">
        <div>
          {" "}
          <FontAwesomeIcon
            className="absolute left-4 ml-20 lg:left-3.5"
            icon={faCircle}
            style={{ color: "#ffcc6c" }}
          />{" "}
          <div className="font-bold">Bachelors degree</div>
        </div>
        <div className="text-sm">2019-23</div>
        <div className="text-sm">DIT Pimpari, Pune</div>
        <div className="text-sm">Percentile: 83.33</div>
      </div>
      <div className="justify-start text-left border-l-2 pl-4">
        <div>
          {" "}
          <FontAwesomeIcon
            className="absolute left-4 ml-20 lg:left-3.5"
            icon={faCircle}
            style={{ color: "#ffcc6c" }}
          />{" "}
          <div className="font-bold">Secondary Education</div>
        </div>
        <div className="text-sm">2018-19</div>
        <div className="text-sm">JNV Nanded</div>
        <div className="text-sm">Percentile: 88.4</div>
      </div>
      <div className="justify-start text-left border-l-2 pl-4">
        <div>
          {" "}
          <FontAwesomeIcon
            className="absolute left-4 ml-20 lg:left-3.5"
            icon={faCircle}
            style={{ color: "#ffcc6c" }}
          />{" "}
          <div className="font-bold">Heigher Secondary Education</div>
        </div>
        <div className="text-sm">2016-17</div>
        <div className="text-sm">JNV Nanded</div>
        <div className="text-sm">Percentile: 89.2</div>
      </div>
    </div>
  );
}

export default Education;
