import React from "react";
import "./App.css";
import { Buttons } from "./Buttons";
import { Display } from "./Display";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Calculator</p>
      </header>
      <div className="calculator">
        <Display />
        <Buttons />
      </div>
      <footer className="App-footer">
        <p>Helen Maher 2020</p>
      </footer>
    </div>
  );
}

export default App;
