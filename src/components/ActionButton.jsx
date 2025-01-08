import { useDispatch, useSelector } from "react-redux";
import "./ActionButton.css";
import { clear, equal } from "../calculatorSlice";

const ActionButton = ({ id, value, classValue, handler }) => {
  const dispatch = useDispatch();

  return <button className={classValue}>{value}</button>;
};

export default ActionButton;
