import "./ActionButton.css";
import { handleClear, handleDelete } from "../calculatorSlice";

const ActionButton = ({ value, classValue, type, handler }) => {
  // const dispatch = useDispatch();
  // const handler = value === "CLEAR" ? () => handleClear() : () => handleDelete()
  // const baseClass = "sve zajednicke klase"
  // const variation = type === "clear" ? "crveni" : "zeleni"
  return <button className={classValue} onClick={() => handler()}>{value}</button>;
};

export default ActionButton;
