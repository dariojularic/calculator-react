import "./ActionButton.css";

const ActionButton = ({ value, type, handler }) => {
  const variationClass = type === "clear" ? "clear-btn" : "delete-btn"
  return <button className={variationClass} onClick={() => handler()}>{value}</button>;
};

export default ActionButton;
