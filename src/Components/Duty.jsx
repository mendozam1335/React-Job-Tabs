import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
const Duty = ({ desc }) => {
  return (
    <div className="job-desc">
      <MdKeyboardDoubleArrowRight className="job-icon" />
      <p>{desc}</p>
    </div>
  );
};

export default Duty;
