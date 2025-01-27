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

export default function Calculator() {
  return (
    <>
      <div className="carcass">
        <div className="visor">
          <div className="previus-operand">123</div>
          <div className="current-operand">
            <div className="result-equals">=</div>
            112121+3211111111111111111111113
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
          <button className="numbers">7</button>
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
