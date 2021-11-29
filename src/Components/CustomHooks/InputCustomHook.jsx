import React, { useState } from "react";
import useInput from "./hook/useInput";


const UseInputHook = () => {

  const [FirstNameReset, FirstNameBind, FirstName] = useInput( '' )
  const [LastNameReset, LastNameBind, LastName] = useInput( '' )

  const submitHandler = ( e ) => {
    e.preventDefault()
    alert( `Hello ${FirstName} ${LastName}` )
    FirstNameReset();
    LastNameReset();
  }
  return (
    <div>
      <h1 className="text-xl">Input Field Custom Hook Example</h1>
      <form onSubmit={submitHandler}>
        <div>
          FirstName: <input className="rounded border border-gray-500 mb-1  p-1" type="text"
            value={FirstName}
            //onChange={( e ) => setFirstName( e.target.value )}
            {...FirstNameBind}
          />
        </div>
        <div>
          LastName: <input className="rounded border border-gray-500 p-1" type="text"
            value={LastName}
            // onChange={( e ) => setLastName( e.target.value )}
            {...LastNameBind}
          />
        </div>
        <button className="rounded border border-gray-500 bg-blue-400 p-1" >Submit</button>
      </form>
    </div>
  )
}

export default UseInputHook