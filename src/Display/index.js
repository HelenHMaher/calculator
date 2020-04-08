import React from "react";

export const Display = (props) => {
  return (
    <div className="display" id="display">
      <div className="formula" id="formula">
        Formula: {props.formula}
      </div>
      <div clasName="current-display" id="current-display">
        CurrentValue: {props.currentValue}
      </div>
    </div>
  );
};

export default Display;
