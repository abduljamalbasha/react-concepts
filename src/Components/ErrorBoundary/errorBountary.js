import React, { Component } from "react";

class ErrorBoundary extends Component {
  
  constructor( props ) {
    super( props )
    this.state = {
      hasError : false
    }
  }
  static getDerivedStateFromError (error) {
    return {
      hasError: true
    }
  }

  render () {
    if ( this.state.hasError ) {
       return (
      <h1>Someting went worng</h1>
    )
    } else {
      return this.props.children
    }
   
  }
}

export default ErrorBoundary