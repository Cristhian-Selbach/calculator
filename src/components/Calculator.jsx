import "../styles/calculator.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faXmark,
  faDivide,
  faEquals,
  faDeleteLeft,
} from "@fortawesome/free-solid-svg-icons";
import DigitButton from "./DigitButton";
import { useReducer } from "react";
export const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATION: "choose-operation",
  CLEAR: "clear",
  DELETE_DIGIT: "delete-digit",
  EVALUETE: "evaluete",
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`,
      };
  }
};

export default function Calculator() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );

  return (
    <>
      <div className="carcass">
        <div className="visor">
          <div className="previus-operand">
            {previousOperand} {operation}
          </div>
          <div className="current-operand">
            <div className="result-equals">=</div>
            {currentOperand}
          </div>
        </div>

        <div className="utilities-grid">
          <button className="utilities">e</button>
          <button className="utilities">µ</button>
          <button className="utilities">sin</button>
          <button className="utilities">cos</button>
        </div>

        <div className="calculator-grid">
          <button className="remove">Ac</button>
          <button className="remove">
            <FontAwesomeIcon icon={faDeleteLeft} />
          </button>
          <button className="operations">
            <FontAwesomeIcon icon={faDivide} />
          </button>
          <button className="operations">
            <FontAwesomeIcon icon={faXmark} />
          </button>
          <DigitButton digit={7} dispatch={dispatch} />
          <DigitButton digit={8} dispatch={dispatch} />
          <DigitButton digit={9} dispatch={dispatch} />
          <button className="operations">
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <DigitButton digit={4} dispatch={dispatch} />
          <DigitButton digit={5} dispatch={dispatch} />
          <DigitButton digit={6} dispatch={dispatch} />
          <div className="vertical-high">
            <button className="operations plus">
              <FontAwesomeIcon icon={faPlus} />
            </button>
            <button className="equal">
              <FontAwesomeIcon icon={faEquals} />
            </button>
          </div>
          <DigitButton digit={1} dispatch={dispatch} />
          <DigitButton digit={2} dispatch={dispatch} />
          <DigitButton digit={3} dispatch={dispatch} />
          <button className="horizontal-high numbers">0</button>
          <button className="numbers">.</button>
        </div>
      </div>
    </>
  );
}
