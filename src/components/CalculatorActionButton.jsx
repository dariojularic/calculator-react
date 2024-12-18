import { useDispatch, useSelector } from "react-redux";
import "./CalculatorActionButton.css";

const CalculatorActionButton = ({ value, classValue }) => {
  const dispatch = useDispatch();
  return <button className={classValue}>{value}</button>;
};

export default CalculatorActionButton;
