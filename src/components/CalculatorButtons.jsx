import CalculatorActionButton from "./CalculatorActionButton";
import "./CalculatorButtons.css";
import {numbersButtons, operationsButtons, actionButtons} from "../data.js";
import { setFirstNumber, handleOperation } from "../calculatorSlice.js";

const CalculatorButtons = () => {
  return (
    <div className="buttons-grid">
      {numbersButtons.map((button) => {
        return (
          <CalculatorActionButton
            key={button.value}
            id={button.id}
            classValue={button.classValue}
            value={button.value}
            handler={() => setFirstNumber(button.value)}
          />
        );
      })}

      {operationsButtons.map((button) => {
        return (
          <CalculatorActionButton
            key={button.value}
            id={button.id}
            classValue={button.classValue}
            value={button.value}
            handler={() => handleOperation(button.value)}
          />
        );
      })}



      {/* {buttons.map((button) => {
        const handler =
          button.type === "number"
            ? () => setFirstNumber(button.value)
            : () => handleOperation(button.value);
        return (
          <CalculatorActionButton
            key={button.value}
            id={button.id}
            classValue={button.classValue}
            value={button.value}
            handler={() => handler()}
          />
        );
      })} */}
    </div>
  );
};

export default CalculatorButtons;
