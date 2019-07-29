import React from "react";
import "./NumberButton.css";

export const NumberButton = props => {
  const handleAddToEquation = () => {
    props.addToEquation(props.number);
  };

  return (
    <button className="numberButton button" onClick={handleAddToEquation}>
      {props.number}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};
