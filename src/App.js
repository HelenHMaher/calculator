import React, { useState } from "react";
import "./App.css";
import Buttons from "./Buttons";
import { Display } from "./Display";

function App() {
  const [currentVal, setCurrentVal] = useState("0");
  const [prevVal, setPrevVal] = useState("0");
  const [currentsign, setCurrentSign] = useState("positive");
  const [lastClicked, setLastClicked] = useState("");
  const [total, setTotal] = useState("");

  const isOperator = /[x/+-]/;

  const handleClear = (e) => {
    setCurrentVal("0");
    setPrevVal("0");
    setCurrentSign("positive");
    setLastClicked("");
    setTotal("");
  };
  const handleNumbers = (e) => {
    const value = e.target.value;
    setCurrentVal(
      currentVal === "0" || isOperator.test(currentVal)
        ? value
        : currentVal + value
    );
  };
  const handleEvaluate = (e) => {
    total !== ""
      ? setCurrentVal(total)
      : !isOperator.test(currentVal)
      ? setCurrentVal(currentVal)
      : setCurrentVal("0");
    setTotal("");
  };
  const handleDecimal = (e) => {};
  const handleOperators = (e) => {
    const value = e.target.value;

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
