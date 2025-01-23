import "../styles/calculator.css";

export default function Calculator() {
  return (
    <>
      <div className="carcass">
        <div className="visor">
          <div className="previus-operand">123</div>
          <div className="current-operand">123</div>
        </div>
        <div className="calculator-grid">
          <button>e</button>
          <button>µ</button>
          <button>sin</button>
          <button>cos</button>
          <button>Ac</button>
          <button>del</button>
          <button>÷</button>
          <button>*</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>-</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>+</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>0</button>
          <button>.</button>
          <button>=</button>
        </div>
      </div>
    </>
  );
}
