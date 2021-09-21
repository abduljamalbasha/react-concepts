import React, { Component } from "react";

class LifeCyleB extends Component {
  constructor( props ) {
    super( props )
    
    this.state = {
      name: "Jamal"
    }
    console.log('LifeCyleB Constructor')
  }
  
  static getDrivedStateFromProps ( props, state ) {
    console.log('LifeCyleB getDrivedStateFromProps')
    return null
  }

  componentDidMount () {
    console.log('LifeCyleB componentDidMount')
  }
    shouldComponentUpdate () {
      console.log( 'LifeCyleB shouldComponentUpdate' )
      return true
  }

  componentDidUpdate () {
    console.log('LifeCyleB componentDidUpdate')
  }

  getSnapshotBeforeUpdate () {
     console.log('LifeCyleB getSnapshotBeforeUpdate')
  }
  render () {
    console.log('LifeCyleB Render')
  return <div>LifeCyleB</div>
}
}

export default LifeCyleB