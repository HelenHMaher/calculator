import React from "react";

export const Display = (props) => {
  const displayFormula = props.formula.replace(/[/]/g, "\u00F7");
  const displayCurVal = () =>
    props.currentValue === "/" ? "\u00F7" : props.currentValue;
  return (
    <div className="display-block" id="displayBlock">
      <div className="error" id="error">
        {props.message}
      </div>
      <div className="formula" id="formula">
        {displayFormula}
      </div>
      <div className="display" id="display">
        {displayCurVal()}
      </div>
    </div>
  );
};

export default Display;
