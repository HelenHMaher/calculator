import React from "react";

export const Display = (props) => {
  return (
    <div className="display" id="display">
      {props.currentValue}
    </div>
  );
};
