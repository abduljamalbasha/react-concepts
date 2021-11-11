import React from 'react';
import { useSuperHeroFetch } from "./hooks/useSuperHerosFetchData";
import { Link } from "react-router-dom";


export const UseQueryComponent = () => {


  const { isLoading, isError, error, data, isFetching, refetch } = useSuperHeroFetch( onSuccess, onError )

  const onSuccess = () => {
    console.log( 'perform side effects after data fetched' )
  }

  const onError = ( error ) => {
    console.log( 'perform side effects after encountering error', error )
  }


  if ( isLoading || isFetching ) {
    return <h1>Loading...</h1>
  }

  console.log( { isLoading, isFetching } )

  if ( isError ) {
    return <h1>{error.message}</h1>
  }

  return (
    <div>
      {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={refetch}>fetch Data</button> */}
      <h1>Super Heros - UseQuery Component</h1>
      {
        data && data.data.map( ( hero ) => {
          return (
            <div key={hero.id} >
              <Link to={`/super-hero-detail/${hero.id}`}>{hero.name}</Link>
            </div>
          )
        } )
      }
      {/* {data.map( ( heroName ) => {
        return <div key={heroName}>{heroName}</div>
      } )} */}
    </div>
  )
}
