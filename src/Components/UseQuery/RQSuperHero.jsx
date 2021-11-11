import React from "react";
import { useParams } from "react-router-dom";
import { useSuperHeroDetail } from "./hooks/useSuperHero";

export const RQSuperHeroDetail = () => {
  const { heroId } = useParams()
  const { isLoading, data, isError, error } = useSuperHeroDetail( heroId )

  if ( isLoading ) {
    return <div>Loading...</div>
  }

  if ( isError ) {
    return <div>{error}</div>
  }

  console.log( data )
  return (
    <div>
      <h1>Super Hero Detail</h1>
      <div>{data && data.data.name} - {data && data.data.alterEgo}</div>
      {/* {
        data && data.map( ( hero ) => {
          return <div>{data.data.hero.name}</div>
        } )
      } */}
    </div>
  )
}