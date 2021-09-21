import React, { Component } from "react";
import ComponentF from "./ComponentF";
import UserContext from "./Context";

class ComponentE extends Component {
  static contextType = UserContext
  render () {
    return (
      <div>This in from Componet E context: {this.context}
         <ComponentF />
        </div>
    )
  }
}

export default ComponentE