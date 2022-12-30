import React from 'react'
import { Pokemons } from '../interface';
import PokemonList from './PokemonList';
import "./pokemon.css";
interface PokemonProps {
  pokemons: Pokemons[];
}
const PokemonCollection: React.FC<PokemonProps> = (props) => {
  const { pokemons } = props;
  return (
    <div className='collection-container'>
      {pokemons.map((pokemon) => {
        return (
          <div className="pokemon-item">
            <div className="pokemon-name">
              <PokemonList key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              image={pokemon.sprites.front_default}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default PokemonCollection