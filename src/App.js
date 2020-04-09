import React, { useState } from "react";
import "./App.css";
import Buttons from "./Buttons";
import Display from "./Display";
import parseString from "./parseString";

function App() {
  const [currentVal, setCurrentVal] = useState("0");
  const [evaluated, setEvaluated] = useState(false);
  const [formula, setFormula] = useState("0");
  const [message, setMessage] = useState("");

  const isOperator = /[x/+-]/;
  const endsWithOperator = /[x/+-/]$/;

  const flashError = () => {
    setMessage("ERROR");
    setTimeout(() => setMessage(""), 1500);
  };

  const handleClear = (e) => {
    setCurrentVal("0");
    setEvaluated(false);
    setFormula("0");
  };
  const handleNumbers = (e) => {
    const value = e.target.value;
    if (currentVal.length === 12) {
      flashError();
    } else {
      setFormula(formula === "0" || evaluated ? value : formula + value);
      setCurrentVal(
        currentVal === "0" || isOperator.test(currentVal) || evaluated
          ? value
          : currentVal + value
      );
    }
    setEvaluated(false);
  };
  const handleEvaluate = (e) => {
    if (isOperator.test(currentVal) || /[.]$/.test(currentVal)) {
      setCurrentVal(parseString(formula.slice(0, formula.length - 1)));
      setFormula(formula.slice(0, formula.length - 1));
    } else {
      setCurrentVal(parseString(formula));
    }
    setEvaluated(true);
  };
  const handleDecimal = (e) => {
    const value = e.target.value;
    if (evaluated === true) {
      setCurrentVal("0" + value);
      setFormula("0" + value);
      setEvaluated(false);
    } else if (/[.]/.test(currentVal) === true) {
      flashError();
    } else {
      setCurrentVal(currentVal + value);
      setFormula(formula + value);
    }
  };
  const handleOperators = (e) => {
    const value = e.target.value;
    if (evaluated === true) {
      setFormula(currentVal + value);
    } else if (/[.]$/.test(formula) === true) {
      setFormula(formula.replace(/[.]$/, value));
    } else if (endsWithOperator.test(formula) === false) {
      setFormula(formula + value);
    } else if (/[-]/.test(value) === true && /[-]$/.test(formula) === false) {
      setFormula(formula + value);
    } else if (/[-]/.test(value) === true && /[-]$/.test(formula) === true) {
      setFormula(formula.replace(/[x/+-]$/, value));
    } else {
      setFormula(formula.replace(/[x/+-]+$/, value));
    }
    setCurrentVal(value);
    setEvaluated(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>JavaScript Calculator</p>
      </header>
      <div className="calculator">
        <Display
          currentValue={currentVal}
          formula={formula}
          message={message}
        />
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
