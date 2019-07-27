import React from "react";
import "./SpecialButton.css"

export const SpecialButton = (props) => {
  return (
    <button className="test">
      {props.special}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};
