import React from 'react'
import classes from './PokemonList.module.css'

export default function PokemonList( { pokemon } ) {
  return (
    <div>
      {pokemon.map( p => (
        <div key={p} className={classes.pokemons} >{p}</div>
      ))}
    </div>
  )
}
