import { useDispatch, useSelector } from "react-redux";
import "./Screen.css"

function Screen() {
  return (
    <div className="screen-container">
      <div className="primary-output"></div>
      <div className="secondary-output"></div>
    </div>
  );
}

export default Screen;
