import { useDispatch, useSelector } from "react-redux";
import "./CalculatorActionButton.css";
import { setFirstNumber } from "../calculatorSlice";

const CalculatorActionButton = ({ id, value, classValue, handler }) => {
  const dispatch = useDispatch();
  // console.log(id);
  // console.log("value", value);
  // console.log(typeof value);
  // console.log(handler(value));

  // if (typeof value === "number") console.log("aaaaaaaaaaaaaa");
  return (
    <button
      className={classValue}
      onClick={() => {
        dispatch(handler(value));
        // dispatch(handler(value));
      }}
    >
      {value}
    </button>
  );
};

export default CalculatorActionButton;
