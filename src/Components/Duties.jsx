import React from "react";
import Duty from "./Duty";
import { v4 as uuidv4 } from "uuid";

const Duties = ({ duties }) => {
  return (
    <div>
      {duties.map((duty, index) => {
        return <Duty desc={duty} key={uuidv4()} />;
      })}
    </div>
  );
};

export default Duties;
