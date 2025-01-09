import { useDispatch } from "react-redux";
import "./ActionButton.css";
import { handleClear, handleDelete } from "../calculatorSlice";

const ActionButton = ({ value, classValue }) => {
  const dispatch = useDispatch();

  const handler = value === "CLEAR" ? () => handleClear() : () => handleDelete() // jel ovo radim ovdje ili u CalculatorButtons???

  return <button className={classValue} onClick={() => dispatch(handler())}>{value}</button>;
};

export default ActionButton;
