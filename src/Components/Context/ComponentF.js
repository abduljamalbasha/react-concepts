import React, { Component } from "react";
import { UserConsumer } from "../Context/Context";
class ComponentF extends Component {
  render () {
    return (
      <UserConsumer>
        {(username) => {
          return <div>This is from conponent F:  {username}</div>
       }}
      </UserConsumer>
    )
  }
}

export default ComponentF