import React from 'react'
import { PokemonDetail, Pokemons } from '../interface';
import PokemonList from './PokemonList';
import "./pokemon.css";
import { Detail } from '../App';
interface PokemonProps {
  pokemons: PokemonDetail[];
  viewDetail: Detail;
  setDetail: React.Dispatch<React.SetStateAction<Detail>>
}
const PokemonCollection: React.FC<PokemonProps> = (props) => {
  const { pokemons, viewDetail, setDetail } = props;
  const selectPokemon = (id: number) =>{
    if(!viewDetail.isOpened){
      setDetail({
        id:id,
        isOpened: true
      })
    }
  }
  return (
    <section className={viewDetail.isOpened? 'collection-container-active': 'collection-container'}>
      {viewDetail.isOpened ?(
        <div className="overlay">

        </div>
      ):(
        <div></div>
      )}
      {pokemons.map((pokemon) => {
        return (
          <div className="pokemon-item">
            <div className="pokemon-name" onClick={() => selectPokemon(pokemon.id)}>
              <PokemonList key={pokemon.id}
              id={pokemon.id}
              viewDetail={viewDetail}
              setDetail= {setDetail}
              name={pokemon.name}
              abilities={pokemon.abilities}
              image={pokemon.sprites.front_default}
              />
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default PokemonCollection