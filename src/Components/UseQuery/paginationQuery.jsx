import React, { useState } from "react";
import { useQuery } from "react-query";
import axios from 'axios'

const fetchColors = ( pageNumber ) => {
  return axios.get( `http://localhost:4000/colors/?_limit=2&_page=${pageNumber}` )
}
export const PaginationQueryComponent = () => {

  const [pageNumber, setPageNumber] = useState( 1 )

  const { isLoading, data, isError, error, isFetching } = useQuery( ['colors', pageNumber], () => fetchColors( pageNumber ), {
    keepPreviousData: true
  } )

  if ( isLoading ) {
    return <div>Loading.....</div>
  }

  if ( isError ) {
    return <div>{error.message}</div>
  }

  return (
    <div>
      <h1>Pagination Query Example</h1>
      {
        data.data.map( ( color ) => {
          return (
            <h1 key={color.id} > {color.id} - {color.label}</h1>
          )
        } )
      }
      <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={() => setPageNumber( page => page - 1 )} disabled={pageNumber === 1} >Prev Page</button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={() => setPageNumber( page => page + 1 )} disabled={pageNumber === 4} >Next Page</button>
        {isFetching && `Loading...`}
      </div>
    </div>
  )
}