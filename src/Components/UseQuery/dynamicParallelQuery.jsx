import React from "react";
import { useQueries } from "react-query";
import axios from 'axios'

const fetchSuperHeros = ( HeroId ) => {
  axios.get( `http://localhost:4000/superheroes/${HeroId}` )
}

export const DynamicParallelQueryComponent = ( { HeroIds } ) => {

  const queryResult = useQueries(
    HeroIds.map( ( heroid ) => {
      return {
        queryKey: ['super-hero', heroid],
        queryFn: () => fetchSuperHeros( heroid )
      }
    } )
  )
  console.log( 'queryResult:', queryResult )
  return (
    <div>
      <h1>Dynamic Parallel Query</h1>

    </div>
  )
}