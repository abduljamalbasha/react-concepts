import React, { useState, useCallback } from "react";
import UCButtonComponent from "./Button";
import UCCountComponent from "./Count";
import UCTitleComponent from "./Title";

export const UCParentComponent = () => {

  const [age, setAge] = useState( 10 )
  const [salary, setSalary] = useState( 1000 )

  const handleIncrementAge = useCallback( () => {
    setAge( age => age + 1 )
  }, [age] )

  const handleIncrementSalary = useCallback( () => {
    setSalary( salary => salary + 1000 )
  }, [salary] )

  return (
    <div>
      <UCTitleComponent title="UseCallback Example" />
      <UCCountComponent count={age} />
      <UCButtonComponent clickHandle={handleIncrementAge}>Increment Age</UCButtonComponent>
      <UCCountComponent count={salary} />
      <UCButtonComponent clickHandle={handleIncrementSalary}>Increment Salary</UCButtonComponent>
    </div>
  )
}