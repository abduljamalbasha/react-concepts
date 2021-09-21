import React from "react";

const ClickCounter = (props) => {
    return (
    <div style={{ alignItems: "center" }}>
        <button
          type="button"
          className="inline-flex ml-5 text-lg items-center text-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={props.IncrementCounter}>Clicked {props.count} Time</button>
    </div>
  )
   
}

export default ClickCounter