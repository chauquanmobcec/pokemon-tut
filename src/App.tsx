import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Pokemon from './conponents/PokemonCollection';
import { Pokemons } from './interface';
import PokemonCollection from './conponents/PokemonCollection';

interface Pokemon {
  name: string;
  url: string
}
export interface Detail {
  id: number,
  isOpened: boolean
}

const App: React.FC = () => {
  const [pokemon, setPokemon] = useState<Pokemons[]>([]);
  const [nextUrl, setNextUrl] = useState<string>("");
  const [viewDetail, setViewDetail] = useState<Detail>({
    id: 0,
    isOpened: false
  })
  useEffect(() => {
    const getPokemon = async () => {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=20&offset=10");
      setNextUrl(response.data.next);
      response.data.results.forEach(
        async (pokemon: Pokemon) => {
          const poke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
          setPokemon((p) => [...p, poke.data]);
        });
    };
    getPokemon();
  }, []);
  const nextPage = async () => {
    let res = await axios.get(nextUrl);
    setNextUrl(res.data.next);
    res.data.results.forEach(async (pokemon: Pokemons) => {
      const poke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
      setPokemon((p) => [...p, poke.data]);
      console.log(poke.data);
    })
  }
  return (
    <div className="App">
      <div className="container">
        <header className='pokemon-header'>Pokemon</header>
        <PokemonCollection pokemons={pokemon} viewDetail={viewDetail} setDetail={setViewDetail} />
        {!viewDetail.isOpened && (
          <div className="btn">
            <button onClick={nextPage}>Load more</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
