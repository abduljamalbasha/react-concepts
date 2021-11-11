import React from "react";
import { useSuperHeroFetch } from "./hooks/useSuperHerosFetchData";
export const HomeWorkComponent = () => {

  const onSuccess = () => {
    console.log( 'perform side effects after data fetched' )
  }

  const onError = ( error ) => {
    console.log( 'perform side effects after encountering error', error )
  }

  const { isLoading, data, isError, error, refetch } = useSuperHeroFetch( onSuccess, onError )

  if ( isLoading ) {
    return <div>loading...</div>
  }

  if ( isError ) {
    return <div>{error}</div>
  }
  console.log( { data } )
  return (
    <div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={refetch}>fetch Data</button>

      { data && data.map( ( hero ) => {
        return <div key={hero}>{hero}</div>
      } )}
    </div>
  )
}