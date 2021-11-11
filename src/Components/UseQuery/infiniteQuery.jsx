import React, { Fragment } from 'react'
import { useInfiniteQuery } from 'react-query'
import axios from 'axios'

const fetchColors = ( { pageParam = 1 } ) => {
  return axios.get( `http://localhost:4000/colors?_limit=2&_page=${pageParam}` )
}

export const InfiniteQueryComponent = () => {
  const {
    isLoading,
    isError,
    error,
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage
  } = useInfiniteQuery( ['colors'], fetchColors, {
    getNextPageParam: ( _lastPage, pages ) => {
      if ( pages.length < 4 ) {
        return pages.length + 1
      } else {
        return undefined
      }
    }
  } )

  if ( isLoading ) {
    return <h2>Loading...</h2>
  }

  if ( isError ) {
    return <h2>{error.message}</h2>
  }

  return (
    <div>
      <div>
        {data && data.pages.map( ( group, i ) => {
          return (
            <Fragment key={i}>
              {group.data.map( color => (
                <h2 key={color.id}>
                  {color.id} {color.label}
                </h2>
              ) )}
            </Fragment>
          )
        } )}
      </div>
      <div>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
          onClick={() => fetchNextPage()} disabled={!hasNextPage} >
          Load more
          </button>
      </div>
      <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
    </div>
  )
}