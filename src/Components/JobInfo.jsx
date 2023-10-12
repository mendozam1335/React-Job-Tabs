import React from "react";
import Duties from "./Duties";

const JobInfo = ({ jobInfo, currentItem }) => {
  const { title, dates, duties, company } = jobInfo[currentItem];
  return (
    <article className="job-info">
      <h3>{title}</h3>
      <span className="job-company">{company}</span>
      <p className="job-date">{dates}</p>
      <Duties duties={duties} />
    </article>
  );
};

export default JobInfo;
