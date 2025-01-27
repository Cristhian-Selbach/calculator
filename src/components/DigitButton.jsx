import "../styles/calculator.css";
import { ACTIONS } from "./Calculator";

export default function DigitButton({ dispatch, digit }) {
  return (
    <button
      className="numbers"
      onClick={() => {
        dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } });
      }}
    >
      {digit}
    </button>
  );
}
