import React, { useState } from "react";
import "./App.css";
import Buttons from "./Buttons";
import Display from "./Display";

function App() {
  const [currentVal, setCurrentVal] = useState("0");
  const [currentsign, setCurrentSign] = useState("positive");
  const [lastOperator, setLastOperator] = useState("");
  const [total, setTotal] = useState("");
  const [evaluated, setEvaluated] = useState(false);
  const [error, setError] = useState(false);
  const [formula, setFormula] = useState("");

  const isOperator = /[x/+-]/;
  const endsWithOperator = /[x/+-/]$/;

  const flashError = (error) => {
    error = true;
    setTimeout((error = !error), 3000);
  };

  const handleClear = (e) => {
    setCurrentVal("0");
    setCurrentSign("positive");
    setTotal("");
    setEvaluated("");
    setFormula("");
  };
  const handleNumbers = (e) => {
    const value = e.target.value;
    setFormula(formula + value);
    setEvaluated(false);
    currentVal === "0" || isOperator.test(currentVal) || evaluated
      ? setCurrentVal(value)
      : setCurrentVal(currentVal + value);
  };
  const handleEvaluate = (e) => {
    isOperator.test(currentVal)
      ? setCurrentVal(formula)
      : setCurrentVal(formula + currentVal);
    setEvaluated(true);
  };
  const handleDecimal = (e) => {
    const value = e.target.value;
    /./.test(currentVal)
      ? flashError
      : setCurrentVal(currentVal + value) && setFormula(formula + value);
  };
  const handleOperators = (e) => {
    const value = e.target.value;
    !endsWithOperator.test(formula) || !isOperator.test(currentVal)
      ? setFormula(formula + value)
      : setFormula(formula.slice(0, formula.length - 1) + value);
    setCurrentVal(value);
  };

  const Error = (props) => {};

  return (
    <div className="App">
      <header className="App-header">
        <p>Calculator</p>
      </header>
      <div className="calculator">
        <Error id="error" className="error" flasherror={flashError} />
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
