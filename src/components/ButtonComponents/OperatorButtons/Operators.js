import React, { useState } from "react";

//import any components needed
import { OperatorButton } from "./OperatorButton";

//Import your array data to from the provided data file
import { operators } from "../../../data";

// the example doesn't show how to set a default value for useState
// STEP 2 - add the imported data to state
export const Operators = props => {
  const [operatorsState] = useState(operators);

  return (
    <div>
      {operatorsState.map(operator => {
        return (
          <OperatorButton
            operator={operator}
            addToEquation={props.addToEquation}
            setValues={props.setValues}
            values={props.values}
            calculate={props.calculate}
          />
        );
      })}

      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};
