import React, { useState } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export const UseStateObjectDemo = () => {
  const [name, setName] = useState({firstName:"", lastName:""})
  return (
    <div>
      <h1>UseState with objects</h1>
      <ul role="list" className="mt-3 grid grid-cols-1 gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-5">
               <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    type="text"
                    id="firstname"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-200 p-2 sm:text-sm border-gray-300 rounded-md"
                    placeholder="First Name"
                    name="firstname" onChange={e => setName({ ...name, firstName: e.target.value}) }
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    type="text"
                    id="lastname"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-200 p-2 sm:text-sm border-gray-300 rounded-md"
                    placeholder="Last Name"
                    name="lastname" onChange={e => setName({ ...name, lastName: e.target.value}) }
                  />
        </div>
          {JSON.stringify(name)}
      </ul>
    </div>
  )  
}


export const StateHooks = () => {
  const initialState = 0
  const [count, setCount] = useState( initialState );

  const increment5Handle = () => {
    for ( let i = 0; i < 5; i++ ){
      setCount(prevState => prevState + 1)
    }
  }
  return (
    <div className="mb-5">
      <h1>UseState</h1>
      
      

 <div>
      
      <ul role="list" className="mt-3 grid grid-cols-1 gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {/* {projects.map((project) => ( */}
          <li key="1" className="col-span-1 flex shadow-sm rounded-md">
            <div
              className={classNames(
                'bg-pink-600 flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md'
              )}
            >
              {"Count"}
            </div>
            <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
              <div className="flex-1 px-4 py-2 text-sm truncate">
                <a href="/" className="text-gray-900 font-medium hover:text-gray-600">
                {count}
                </a>
                {/* <p className="text-gray-500"> Members</p> */}
              </div>
              <div className="flex-shrink-0 pr-2">
                <button
                  type="button"
                  className="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="sr-only">Open options</span>
                  {/* <DotsVerticalIcon className="w-5 h-5" aria-hidden="true" /> */}
                </button>
              </div>
            </div>
          </li>
          <button type="button"
            className="inline-flex ml-5 items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={() => setCount( prevState => prevState + 1 )} >Increment</button>
          <button type="button"
            className="inline-flex ml-5 items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={() => setCount( prevState => prevState - 1 )} >Decrement</button>
          <button type="button"
            className="inline-flex ml-5 items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={increment5Handle} >Increment 5</button>
          <button type="button"
            className="inline-flex ml-5 items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={() => setCount( initialState )} >Reset</button>
      </ul>
    </div>
    </div>
  )
}



// export default StateHooks
