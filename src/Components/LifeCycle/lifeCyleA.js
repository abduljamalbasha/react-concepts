import React, { Component } from "react";
import LifeCyleB from "./lifeCyleB";

class LifeCyleA extends Component {
  constructor( props ) {
    super( props )
    
    this.state = {
      name: "Jamal"
    }
    console.log('LifeCyleA Constructor')
  }
  
  static getDrivedStateFromProps ( props, state ) {
    console.log('LifeCyleA getDrivedStateFromProps')
    return null
  }

  componentDidMount () {
    console.log('LifeCyleA componentDidMount')
  }

  shouldComponentUpdate () {
    console.log( 'LifeCyleA shouldComponentUpdate' )
    return true
  }

  componentDidUpdate () {
    console.log('LifeCyleA componentDidUpdate')
  }

  getSnapshotBeforeUpdate () {
     console.log('LifeCyleA getSnapshotBeforeUpdate')
  }
  render () {
    console.log( 'LifeCyleA Render' )
    return (
      <div>
        <div>LifeCyleA</div>
        <LifeCyleB />
        </div>
    )
}
}

export default LifeCyleA