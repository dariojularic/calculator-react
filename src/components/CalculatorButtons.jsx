import CalculatorActionButton from "./CalculatorActionButton";
import "./CalculatorButtons.css";
import buttons from "../data.js";

function CalculatorButtons() {
  return (
    <div className="buttons-grid">
      {buttons.map((button) => {
        // console.log(button);
        const handler = button.type === "number" ? "jedan handler" : "drugi handler"
        return <CalculatorActionButton key={button.value} id={button.id} classValue={button.classValue} value={button.value}  />;
      })}
    </div>
  );
}

export default CalculatorButtons;
