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
        currentOperand: `${currentOperand || ""}${payload.digit}`,
      };
  }
};

export default function Calculator() {
  const [{ currentOperand, previousOperand, operation }] = useReducer(
    reducer,
    {}
  );

  return (
    <>
      <div className="carcass">
        <div className="visor">
          <div className="previus-operand">{previousOperand}</div>
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
          <DigitButton />
          <button className="numbers">8</button>
          <button className="numbers">9</button>
          <button className="operations">
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <button className="numbers">4</button>
          <button className="numbers">5</button>
          <button className="numbers">6</button>
          <div className="vertical-high">
            <button className="operations plus">
              <FontAwesomeIcon icon={faPlus} />
            </button>
            <button className="equal">
              <FontAwesomeIcon icon={faEquals} />
            </button>
          </div>
          <button className="numbers">1</button>
          <button className="numbers">2</button>
          <button className="numbers">3</button>
          <button className="horizontal-high numbers">0</button>
          <button className="numbers">.</button>
        </div>
      </div>
    </>
  );
}
