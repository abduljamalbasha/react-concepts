import React, { useState } from "react";
import { userAddSuperHero, useSuperHeroFetch } from "./hooks/useSuperHerosFetchData";


export const MutationQueryComponent = () => {

  const [name, setName] = useState( '' )
  const [alterEgo, setAlterEgo] = useState( '' )
  const { mutate } = userAddSuperHero()

  const { isLoading, data, isError, error, refetch } = useSuperHeroFetch()



  const HandleAddSuperHero = () => {
    console.log( { name, alterEgo } )
    const hero = { name, alterEgo }
    mutate( hero )
  }


  if ( isLoading ) {
    return <div>loading....</div>
  }

  if ( isError ) {
    return <div>{error.message}</div>
  }

  return (
    <div>
      <div>
        <div className="border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
          <label htmlFor="name" className="block text-xs font-medium text-gray-900">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
            placeholder="Jane Doe"
            onChange={( e ) => setName( e.target.value )}
          />
        </div>

        <div className="border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
          <label htmlFor="name" className="block text-xs font-medium text-gray-900">
            AlterEgo
          </label>
          <input
            type="text"
            name="alterEgo"
            id="alterEgo"
            className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
            placeholder="Jane Doe"
            onChange={( e ) => setAlterEgo( e.target.value )}
          />
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
          onClick={HandleAddSuperHero}>Add Hero</button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
          onClick={refetch}>Fetch Hero</button>
      </div>
      {
        data.data.map( ( hero ) => {
          return <div key={hero.id}>{hero.name} - {hero.alterEgo} </div>
        } )
      }
    </div>
  )
}

