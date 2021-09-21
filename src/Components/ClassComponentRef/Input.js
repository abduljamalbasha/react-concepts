import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super( props )
    this.inputRef = React.createRef()
  }

  focusInput () {
    this.inputRef.current.focus()
  }
  
  render () {
    return (
          
             
                  <input
                    type="text" ref={this.inputRef}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-300 p-2 sm:text-sm border-gray-300 rounded-md"
                    placeholder="Click Button to Focus me"
                  />
                
    )
  }
}

export default Input