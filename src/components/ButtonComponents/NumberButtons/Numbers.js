import React, { useState } from "react";

//import any components needed
import { NumberButton } from "./NumberButton";

//Import your array data (to ##) from the provided data file
import { numbers } from "../../../data";

// STEP 2 - add the imported data to state(using a hook)
export const Numbers = () => {  
  const [numbersState, setNumbersState] = useState(numbers);
  
  const renderButton = number => {
    return <NumberButton number={number} />;
  }

  return (
    <div>
      {numbersState.map(renderButton)}
      
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};
