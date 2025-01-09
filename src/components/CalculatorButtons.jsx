import CalculatorActionButton from "./CalculatorActionButton";
import ActionButton from "./ActionButton.jsx";
import "./CalculatorButtons.css";
import { numbersButtons, operationsButtons, actionButtons } from "../data.js";
import { setFirstNumber, handleOperation, handleEqual } from "../calculatorSlice.js";

const CalculatorButtons = () => {
  return (
    <>
      <div className="action-buttons">
        {actionButtons.map((button) => {
          return (
            <ActionButton
              key={button.key}
              id={button.id}
              classValue={button.classValue}
              value={button.value}
              // handler={() => handler()}
            />
          );
        })}
      </div>

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
          const handler = button.value === "=" ? () => handleEqual() : () => handleOperation(button.value)


          return (
            <CalculatorActionButton
              key={button.value}
              id={button.id}
              classValue={button.classValue}
              value={button.value}
              handler={() => handler()}
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
    </>
  );
};

export default CalculatorButtons;
