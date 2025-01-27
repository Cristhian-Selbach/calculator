import "../styles/calculator.css";
import { ACTIONS } from "./Calculator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faXmark,
  faDivide,
} from "@fortawesome/free-solid-svg-icons";

const operationIcons = {
  plus: <FontAwesomeIcon icon={faPlus} />,
  minus: <FontAwesomeIcon icon={faMinus} />,
  multiple: <FontAwesomeIcon icon={faXmark} />,
  divide: <FontAwesomeIcon icon={faDivide} />,
};

export default function OperationButton({ dispatch, operation }) {
  return (
    <button
      className="operations"
      onClick={() => {
        dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } });
      }}
    >
      {operationIcons[operation]}
    </button>
  );
}
