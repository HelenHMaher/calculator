import React from "react";

export const Display = (props) => {
  return (
    <div className="display-block" id="displayBlock">
      <div className="formula" id="formula">
        {props.formula}
      </div>
      <div clasName="display" id="display">
        {props.currentValue}
      </div>
    </div>
  );
};

export default Display;
