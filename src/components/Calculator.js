import React from "react";
import { connect } from "react-redux";
import {
  handleNumber,
  handleCe,
  handleC,
  handleDoArithmetic,
  handleFraction,
  handleInverseFraction,
  handleSqrt,
  handleEqual,
} from "../redux";

function Calculator({
  value,
  stek,
  handleNumber,
  handleCe,
  handleC,
  handleDoArithmetic,
  handleFraction,
  handleInverseFraction,
  handleSqrt,
  handleEqual,
}) {
  return (
    <div>
      <h2 className="title">Calculator</h2>
      <p className="stek">{stek}</p>
      <input type="text" value={value} className="inputArea" readOnly />
      <div className="calculator">
        <button
          className="grid-item seven"
          onClick={() => handleNumber(7)}
          value="7"
        >
          7
        </button>
        <button
          className="grid-item eight"
          onClick={() => handleNumber(8)}
          value="8"
        >
          8
        </button>
        <button
          className="grid-item nine"
          onClick={() => handleNumber(9)}
          value="9"
        >
          9
        </button>
        <button className="grid-item c" onClick={() => handleC()}>
          C
        </button>
        <button
          className="grid-item division"
          onClick={() => handleDoArithmetic("/")}
          value="/"
        >
          /
        </button>
        <button className="grid-item equal" onClick={() => handleEqual()}>
          =
        </button>
        <button
          className="grid-item four"
          onClick={() => handleNumber(4)}
          value="4"
        >
          4
        </button>
        <button
          className="grid-item five"
          onClick={() => handleNumber(5)}
          value="5"
        >
          5
        </button>
        <button
          className="grid-item six"
          onClick={() => handleNumber(6)}
          value="6"
        >
          6
        </button>
        <button className="grid-item ce" onClick={() => handleCe()}>
          CE
        </button>
        <button
          className="grid-item multiplication"
          onClick={() => handleDoArithmetic("*")}
          value="*"
        >
          *
        </button>
        <button
          className="grid-item one"
          onClick={() => handleNumber(1)}
          value="1"
        >
          1
        </button>
        <button
          className="grid-item two"
          onClick={() => handleNumber(2)}
          value="2"
        >
          2
        </button>
        <button
          className="grid-item three"
          onClick={() => handleNumber(3)}
          value="3"
        >
          3
        </button>
        <button
          className="grid-item procent"
          onClick={() => handleDoArithmetic("%")}
          value="%"
        >
          %
        </button>
        <button
          className="grid-item subtraction"
          onClick={() => handleDoArithmetic("-")}
          value="-"
        >
          -
        </button>
        <button
          className="grid-item zero"
          onClick={() => handleNumber(0)}
          value="0"
        >
          0
        </button>
        <button
          className="grid-item inverse-fraction"
          onClick={() => handleInverseFraction()}
        >
          1/x
        </button>
        <button className="grid-item fraction" onClick={() => handleFraction()}>
          .
        </button>
        <button className="grid-item sqrt" onClick={() => handleSqrt()}>
          sqrt
        </button>
        <button
          className="grid-item addition"
          onClick={() => handleDoArithmetic("+")}
          value="+"
        >
          +
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    value: state.calculator.value,
    stek: state.calculator.stek,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleNumber: (number) => dispatch(handleNumber(number)),
    handleCe: () => dispatch(handleCe()),
    handleC: () => dispatch(handleC()),
    handleDoArithmetic: (symbol) => dispatch(handleDoArithmetic(symbol)),
    handleFraction: () => dispatch(handleFraction()),
    handleInverseFraction: () => dispatch(handleInverseFraction()),
    handleSqrt: () => dispatch(handleSqrt()),
    handleEqual: () => dispatch(handleEqual()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
