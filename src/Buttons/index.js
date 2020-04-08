import React from "react";
import ButtonContainer from "./button-container";
import initialize from "./initialize";
import numbers from "./numbers";
import evaluate from "./evaluate";
import decimal from "./decimal";
import operators from "./operators";

export const Buttons = (props) => {
  return (
    <ButtonContainer
      initialize={initialize}
      numbers={numbers}
      evaluate={evaluate}
      decimal={decimal}
      operators={operators}
    />
  );
};

export default Buttons;
