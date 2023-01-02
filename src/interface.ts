export interface Pokemons {
    id: number;
    name: string;
    sprites: {
        front_default: string
    }
}
export interface PokemonDetail extends Pokemons{
    abilities?:{
        ability: string;
        name: string;
    }[];
}