import CalculatorActionButton from "./CalculatorActionButton";
import ActionButton from "./ActionButton.jsx";
import "./CalculatorButtons.css";
import { numbersButtons, operationsButtons, actionButtons } from "../data.js";
import { setFirstNumber, handleOperation, handleEqual, handleClear, handleDelete } from "../calculatorSlice.js";
import { useDispatch } from "react-redux";

const CalculatorButtons = () => {
  const dispatch = useDispatch()
  return (
    <>
      <div className="action-buttons" >
        {actionButtons.map((button) => {
          const handler = button.value === "CLEAR" ? () => dispatch(handleClear()) : () => dispatch(handleDelete())

          return (
            <ActionButton
              key={button.key}
              id={button.id}
              classValue={button.classValue}
              value={button.value}
              type={button.type}
              handler={() => handler()}
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
              handler={() => dispatch(setFirstNumber(button.value))}
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
              handler={() => dispatch(handler())}
            />
          );
        })}
      </div>
    </>
  );
};

export default CalculatorButtons;
