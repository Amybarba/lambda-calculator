import React, { useState } from "react";

//import any components needed
import { NumberButton } from "./NumberButton";

//Import your array data (to ##) from the provided data file
import { numbers } from "../../../data";
import "./Numbers.css";

// STEP 2 - add the imported data to state(using a hook)
export const Numbers = props => {
  const [numbersState] = useState(numbers);

  const renderButton = number => {
    return <NumberButton number={number} addToEquation={props.addToEquation} />;
  };

  return (
    <div className="numbersContainer">
      {numbersState.map(renderButton)}

      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};
