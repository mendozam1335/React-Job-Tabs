import React from "react";

const Button = ({ setCurrentItem, index, company, classn }) => {
  const handleOnClick = () => {
    setCurrentItem(index);
  };
  return (
    <button onClick={handleOnClick} className={classn}>
      {company}
    </button>
  );
};

export default Button;
