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
import OperationButton from "./OperationButton";
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
          <OperationButton operation={"divide"} dispatch={dispatch} />
          <OperationButton operation={"multiple"} dispatch={dispatch} />
          <DigitButton digit={7} dispatch={dispatch} />
          <DigitButton digit={8} dispatch={dispatch} />
          <DigitButton digit={9} dispatch={dispatch} />
          <OperationButton operation={"minus"} dispatch={dispatch} />
          <DigitButton digit={4} dispatch={dispatch} />
          <DigitButton digit={5} dispatch={dispatch} />
          <DigitButton digit={6} dispatch={dispatch} />
          <div className="vertical-high">
            <OperationButton operation={"plus"} dispatch={dispatch} />
            <button className="equal">
              <FontAwesomeIcon icon={faEquals} />
            </button>
          </div>
          <DigitButton digit={1} dispatch={dispatch} />
          <DigitButton digit={2} dispatch={dispatch} />
          <DigitButton digit={3} dispatch={dispatch} />
          <DigitButton digit={0} dispatch={dispatch} />
          <DigitButton digit={"."} dispatch={dispatch} />
        </div>
      </div>
    </>
  );
}
