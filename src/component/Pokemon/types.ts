import { Pokemon } from "../../query/types";

export interface PokemonListProps {
  pokemons: Pokemon[] | undefined;
}

export interface PokemonCardProps {
  image?: string;
  name: string;
}

export interface PokemonCardLoaderProps {
  length: number;
}
