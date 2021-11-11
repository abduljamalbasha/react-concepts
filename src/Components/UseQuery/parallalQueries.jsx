import React from "react";
import { useQuery } from "react-query";
import axios from 'axios'


const fetchSuperHeroes = () => {
  return axios.get( 'http://localhost:4000/superheroes' )
}

const fetchFriends = () => {
  return axios.get( 'http://localhost:4000/friends' )
}

export const ParallalQueryComponent = () => {

  const { data: superHeroes } = useQuery( 'super-heroes', fetchSuperHeroes )
  const { data: friends } = useQuery( 'friends', fetchFriends )

  console.log( 'friends:', friends )
  return (
    <div>
      <h1>Parallal Query Example</h1>
      {
        friends && friends.data.map( ( friend ) => {
          return <div>{friend.name}</div>
        } )
      }
    </div>
  )
}