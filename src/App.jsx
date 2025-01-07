import { useState } from "react";
import "./App.css";
import Screen from "./components/Screen";
import CalculatorButtons from "./components/CalculatorButtons";
import { setFirstNumber, handleOperation } from "./calculatorSlice";

function App() {
  return (
    <div className="calculator-container">
      <Screen />
      <CalculatorButtons
      />
    </div>
  );
}

export default App;
