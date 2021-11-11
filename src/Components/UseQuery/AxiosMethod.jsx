import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const AxiosRQComponent = () => {

  const [isLoading, setIsLoading] = useState( true )
  const [data, setData] = useState( [] )
  const [error, setError] = useState( '' )

  useEffect( () => {
    axios.get( 'http://localhost:4000/superheroes' ).then( res => {
      setData( res.data )
      setIsLoading( false )
    } ).catch( error => {
      setError( error.message )
      setIsLoading( false )
    } )
  }, [] )

  if ( isLoading ) {
    return <h1>Loading</h1>
  }

  if ( error ) {
    return <h1>{error}</h1>
  }

  return (
    <div>
      <h1>Super Heroes - Normal Axios Fetch data</h1>
      {
        data.map( ( hero ) => {
          return <div key={hero.name} >{hero.name}</div>
        } )
      }
    </div>
  )
}


