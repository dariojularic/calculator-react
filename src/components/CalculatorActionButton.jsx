import { useDispatch } from "react-redux";
import "./CalculatorActionButton.css";
import { setFirstNumber } from "../calculatorSlice";

const CalculatorActionButton = ({ value, classValue, handler }) => {
  const dispatch = useDispatch();

  return (
    <button className={classValue} onClick={() => dispatch(handler(value))}>
      {value}
    </button>
  );
};

export default CalculatorActionButton;

// da odem sa route stranice ("/") na stranicu "menu" trebam pogledat react - router
// trebat ce mi redux da spremim usera
// pogledati react router komponentu <SharedLayout /> u dokumentaciji i youtube

// https://react-fast-pizza-api.onrender.com/api/menu

// napravit pocetnu stranu:
// kad ukucam nesto u input, pojavi se dugme start ordering
// kad submitam user se spremi u state i navigujem na "Menu" stranicu samo h1 i onda se cujemo
