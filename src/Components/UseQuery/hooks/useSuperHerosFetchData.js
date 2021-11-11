import { useQuery, useMutation, useQueryClient } from "react-query";
import {request} from '../utils/axios.utils'

const fetchSuperHeros = () => {
    
  return request({url:'/superheroes'})
    // return axios.get( 'http://localhost:4000/superheroes' ).catch( error => {
    //   return error.message
    // } )
  }

const addSuperHero = ( hero ) => {
  return request({url:'/superheroes', method:'post', data: hero})
    // return axios.post('http://localhost:4000/superheroes',hero)
  }
export const useSuperHeroFetch = (onSuccess, onError) => {
   return useQuery(
    'super-heroes',
    fetchSuperHeros,
    {
      // cacheTime: 5000,
      // staleTime: 30000
      // refetchOnMount: true,
      // refetchOnWindowFocus: true
      // refetchInterval: 2000, // polling
      // refetchIntervalInBackground: true
      // enabled: false,
      onSuccess,
      onError,

      // select: ( data ) => {
      //   const superHeroNames = data.data.map( ( hero ) => hero.name )
      //   return superHeroNames
      // }
    }
  )
}

export const userAddSuperHero = () => {
  const queryClient = useQueryClient()
  return useMutation( addSuperHero, {
    // onSuccess: (data) => {
    //   //queryClient.invalidateQueries( 'super-heroes' )
    //   queryClient.setQueriesData( 'super-heroes', (oldQueryData) => {
    //     return {
    //       ...oldQueryData,
    //       data: [...oldQueryData.data, data.data]
    //    }
    //   })
    // }

    onMutate: async (newHero) => {
      await queryClient.cancelQueries( 'super-heroes' )
      const previousQueryData = queryClient.getQueriesData( 'super-heroes' )
      queryClient.setQueriesData( 'super-heroes', ( oldQueryData ) => {
        return {
          ...oldQueryData,
          data :[ ...oldQueryData.data, {id: oldQueryData.data.length + 1, ...newHero}]
        }
      })

    },
    onError: (_error, _hero, context) => {
        queryClient.setQueriesData('super-heroes',context.previousQueryData)
    },
    onSettled: () => {
      queryClient.invalidateQueries('super-heroes')
    }

  })
}