import React from "react";
import "./OperatorButton.css";

export const OperatorButton = props => {
  const handleAddToEquation = () => {
    props.addToEquation(props.operator.value);
  };

  const handleOperator = () => {
    if (props.operator.value === "=") {
      props.calculate();
    } else {
      handleAddToEquation();
    }
  };

  return (
    <button onClick={handleOperator} className="operatorButton button">
      {props.operator.char}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};
