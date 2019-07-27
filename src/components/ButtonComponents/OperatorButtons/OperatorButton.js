import React from "react";

export const OperatorButton = (props) => {
  return (
    <button>
      {props.operator.char}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};
