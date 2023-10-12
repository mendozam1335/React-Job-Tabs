import React from "react";
import Button from "./Button";

const BtnContainer = ({ jobs, currentItem, setCurrentItem }) => {
  return (
    <div className="btn-container">
      {jobs.map((job, index) => {
        const { id, company } = job;
        let classn = "";
        {
          classn = currentItem === index ? "job-btn active-btn" : "job-btn";
        }
        return (
          <Button
            key={id}
            setCurrentItem={setCurrentItem}
            index={index}
            company={company}
            classn={classn}
          />
        );
      })}
    </div>
  );
};

export default BtnContainer;
