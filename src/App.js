import React, { useState } from "react";
import "./App.css";
import Buttons from "./Buttons";
import Display from "./Display";
import Error from "./Error";
import parseString from "./parseString";

function App() {
  const [currentVal, setCurrentVal] = useState("0");
  const [currentsign, setCurrentSign] = useState("positive");
  const [total, setTotal] = useState("0");
  const [evaluated, setEvaluated] = useState(false);
  const [formula, setFormula] = useState("0");
  const [message, setMessage] = useState("");

  const isOperator = /[x/+-]/;
  const endsWithOperator = /[x/+-/]$/;

  const flashError = (text) => {
    setMessage(text);
  };

  const handleClear = (e) => {
    setCurrentVal("0");
    setCurrentSign("positive");
    setTotal("0");
    setEvaluated(false);
    setFormula("0");
  };
  const handleNumbers = (e) => {
    const value = e.target.value;
    setFormula(formula === "0" || evaluated ? value : formula + value);
    setEvaluated(false);
    currentVal === "0" || isOperator.test(currentVal) || evaluated
      ? setCurrentVal(value)
      : setCurrentVal(currentVal + value);
  };
  const handleEvaluate = (e) => {
    isOperator.test(currentVal) &&
      setFormula(formula.slice(0, formula.length - 1));
    setCurrentVal(parseString(formula));
    setEvaluated(true);
  };
  const handleDecimal = (e) => {
    const value = e.target.value;
    if (/[.]/.test(currentVal) === true || evaluated === true) {
      flashError("Error");
      setTimeout(() => flashError(""), 1000);
    } else {
      setCurrentVal(currentVal + value);
      setFormula(formula + value);
    }
  };
  const handleOperators = (e) => {
    const value = e.target.value;
    !endsWithOperator.test(formula) || !isOperator.test(currentVal)
      ? setFormula(formula + value)
      : setFormula(formula.slice(0, formula.length - 1) + value);
    setCurrentVal(value);
    setEvaluated(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Calculator</p>
      </header>
      <div className="calculator">
        <Error id="error" className="error" message={message} />
        <Display currentValue={currentVal} formula={formula} />
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
