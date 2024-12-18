import { useDispatch, useSelector } from "react-redux";
import "./CalculatorActionButton.css";
import { setFirstNumber } from "../calculatorSlice";

const CalculatorActionButton = ({ value, classValue }) => {
  const dispatch = useDispatch();
  return (
    <button
      className={classValue}
      onClick={() => {
        dispatch(setFirstNumber());
      }}
    >
      {value}
    </button>
  );
};

export default CalculatorActionButton;
