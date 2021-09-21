import React, { useEffect, useReducer } from "react";
import axios from 'axios'

const initialState = {
  loading: true,
  post: {},
  error : ""
}

const reducer = ( state, action ) =>{
  switch ( action.type ) {
    case "FETCH_DATA":
      return {
        loading: false,
        post: action.payload,
        error:""
      }
    case "FETCH_ERROR":
      return {
        loading: false,
        post: {},
        error: "Someting went wrong"
      }
    default:
      return state
    
  }
}

const FetchDataWithReducer = () => {
  const [state, dispatch] = useReducer( reducer, initialState )
  
  useEffect( () => {
    axios.get( 'https://jsonplaceholder.typicode.com/posts/1' )
      .then( response => {
              dispatch({type:'FETCH_DATA', payload:response.data})
      } )
      .catch( error => {
      dispatch({type:"FETCH_ERROR"})
    })
  },[] )
  return (
    <div>
      <h1 className="text-left text-lg" >Fetch Data with UseReducer</h1>
      {state.loading ? 'Loading' : state.post.title}
      {state.error ? state.error : null  }
    </div>
  )
}

export default FetchDataWithReducer