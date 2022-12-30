import React from 'react';
import "./pokemon.css";
interface PokemonListProps {
    name: string;
    id: string;
    image: string;
}
const PokemonList:React.FC<PokemonListProps> = (props) => {
    const {name, id, image} = props;

  return (
    <section className='pokemon-list-container'>
        <p className='pokemon-name'>{name}</p>
        <img className='pokemon-image' src={image} alt={name} />
    </section>
  )
}

export default PokemonList