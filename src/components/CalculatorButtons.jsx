import CalculatorActionButton from "./CalculatorActionButton";
import "./CalculatorButtons.css";
import buttons from "../data.js";
import { setFirstNumber, setOperation } from "../calculatorSlice.js";

const CalculatorButtons = () => {
  return (
    <div className="buttons-grid">
      {buttons.map((button) => {
        // console.log(button)

        // const handler = return if (button.type === "number") {
        //   handler = setFirstNumber()
        // }
        // console.log(setFirstNumber());
        // console.log(button.type === "number");
        const handler =
          button.type === "number" ? () => setFirstNumber(button.value) : () => setOperation(button.value);

        // console.log("handler", handler());
        // console.log("setFirstNumber", setFirstNumber());
        // console.log("setOperation", setOperation());
        // console.log("button.type", button.type);
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
    </div>
  );
};

export default CalculatorButtons;
