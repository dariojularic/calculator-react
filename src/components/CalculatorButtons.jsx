import CalculatorActionButton from "./CalculatorActionButton";
import "./CalculatorButtons.css";
import buttons from "../data.js";

function CalculatorButtons() {
  return (
    <div className="buttons-grid">
      {buttons.map((button) => {
        console.log(button);
        return <CalculatorActionButton key={button.value} classValue={button.classValue} value={button.value} />;
      })}
    </div>
  );
}

export default CalculatorButtons;
