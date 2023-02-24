import { useState, useEffect } from 'react'
import PokemonList from './components/PokemonList'
import Pagination from './components/Pagination'
import axios from 'axios'
import './App.css'


function App() {
   const [pokemon, setPokemon] = useState([])
   const [currentPageUrl, setCurrentPageUrl] = useState('https://pokeapi.co/api/v2/pokemon/?limit=8&offset=8')
   const [nextPageUrl, setNextPageUrl] = useState()
   const [prevPageUrl, setPrevPageUrl] = useState()
   const [loading, setLoading] = useState(true)

   useEffect(() => {
    setLoading(true)
    let cancel
     axios.get(currentPageUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c)
     }).then(res => {
      setLoading(false)
      setNextPageUrl(res.data.next)
      setPrevPageUrl(res.data.previous)
      setPokemon(res.data.results.map(p => p.name))
   })

   return () => cancel()

   }, [currentPageUrl])

function gotoNextPage() {
    setCurrentPageUrl(nextPageUrl)
  }

  function gotoPrevPage() {
    setCurrentPageUrl(prevPageUrl)
  }

   if (loading) return "Loading..."

  return (
    <div className="App">
    
     <PokemonList pokemon={pokemon} />  
     <h2 className='page-info'>A list of all pokemon names.
     <br/> There are a few... Do you recognize any?
     </h2>
     <Pagination 
     gotoNextPage={nextPageUrl ? gotoNextPage : null}
     gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
     />
    </div>
  )
}

export default App


/*
import { useQuery } from '@tanstack/react-query'
let number = Math.floor(Math.random() * 905);
const API_POKEMON = "https://pokeapi.co/api/v2/pokemon/";
  const query = useQuery({
    queryKey: ['page'],
    queryFn: () => {
      return fetch(API_POKEMON)
        .then((response) => response.json())
        .then((data) => {
          return data
        })
    }
  })
   console.log(query)

  if (query.isLoading) {
    return (
      <div>Loading...</div>
    )
  }*/