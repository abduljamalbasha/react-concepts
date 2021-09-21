import React, { Component } from "react";
import Input from "./Input";

class ClassComponentRef extends Component{
  constructor( props ) {
    super( props )
    this.componentRef = React.createRef()

  }


  clickHandle = () => {
    this.componentRef.current.focusInput()
  }

  render () {
    return (
      <div>
        <Input type="text" ref={ this.componentRef}/>
        <button type="button"
          className="inline-flex ml-5 px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={this.clickHandle} >Focus Input</button>
      </div>
    )
  }
}

export default ClassComponentRef