import "./CalculatorActionButton.css";

const CalculatorActionButton = ({ value, classValue, handler }) => {
  return (
    <button className={classValue} onClick={() => handler(value)}>
      {value}
    </button>
  );
};

export default CalculatorActionButton;
