import { useState } from "react";
import "./App.css";
import Screen from "./components/Screen";
import CalculatorButtons from "./components/CalculatorButtons";
import { setFirstNumber, setOperation } from "./calculatorSlice";

function App() {
  return (
    <div className="calculator-container">
      <Screen />
      <CalculatorButtons setFirstNumber={setFirstNumber} setOperation={setOperation} />
    </div>
  )
}

export default App;
