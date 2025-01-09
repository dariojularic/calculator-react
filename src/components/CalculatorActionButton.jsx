import { useDispatch } from "react-redux";
import "./CalculatorActionButton.css";
import { setFirstNumber } from "../calculatorSlice";

const CalculatorActionButton = ({ value, classValue, handler }) => {
  const dispatch = useDispatch();

  return (
    <button
      className={classValue}
      onClick={() => dispatch(handler(value))}
    >
      {value}
    </button>
  );
};

export default CalculatorActionButton;
