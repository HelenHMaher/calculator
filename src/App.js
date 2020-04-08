import React, { useState } from "react";
import "./App.css";
import Buttons from "./Buttons";
import { Display } from "./Display";

function App() {
  const [currentVal, setCurrentVal] = useState("0");
  const [currentsign, setCurrentSign] = useState("positive");
  const [lastOperator, setLastOperator] = useState("");
  const [total, setTotal] = useState("");
  const [lastClicked, setLastClicked] = useState("");
  const [error, setError] = useState(false);

  const isOperator = /[x/+-]/;

  const handleClear = (e) => {
    setCurrentVal("0");
    setCurrentSign("positive");
    setLastOperator("");
    setTotal("");
    setLastClicked("");
  };
  const handleNumbers = (e) => {
    const value = e.target.value;
    setCurrentVal(
      currentVal === "0" || isOperator.test(currentVal) || lastClicked === "="
        ? value
        : currentVal + value
    );
    setLastClicked(value);
  };
  const handleEvaluate = (e) => {
    isOperator.test(currentVal)
      ? setCurrentVal(total)
      : setCurrentVal(total + lastOperator + currentVal);
    setTotal("");
    setLastClicked("=");
  };
  const handleDecimal = (e) => {
    const value = e.target.value;
    /./.text(currentVal) ? setError(true) : setCurrentVal(currentVal + value);
  };
  const handleOperators = (e) => {
    const value = e.target.value;
    !isOperator.test(currentVal) &&
      setTotal(total !== "" ? total + lastOperator + currentVal : currentVal);
    setLastOperator(value);
    setLastClicked(value);
    setCurrentVal(value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Calculator</p>
      </header>
      <div className="calculator">
        <Display currentValue={currentVal} />
        <Buttons
          clear={handleClear}
          numbers={handleNumbers}
          evaluate={handleEvaluate}
          decimal={handleDecimal}
          operators={handleOperators}
        />
      </div>
      <footer className="App-footer">
        <p>Helen Maher 2020</p>
      </footer>
    </div>
  );
}

export default App;
