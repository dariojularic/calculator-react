import { useSelector } from "react-redux";
import "./Screen.css";

const Screen = () => {
  const { firstNumber, secondNumber, operation } = useSelector(
    (store) => store.calculator
  );

  return (
    <div className="screen-container">
      <div className="primary-output">{secondNumber} {operation}</div>
      <div className="secondary-output">{firstNumber}</div>
    </div>
  );
};

export default Screen;
