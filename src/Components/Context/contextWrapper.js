import React from "react";
import ComponentC from "./ComponetC";
import { UserProvider } from "./Context";

const ContextWrapperComponent = () => {
  return (
      <UserProvider value="Jamal">
        <ComponentC />
      </UserProvider>  
  )
}

export default ContextWrapperComponent