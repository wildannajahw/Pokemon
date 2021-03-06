export interface Moves {
  move: {
    name: string;
  };
}
export interface Types {
  type: {
    name: string;
  };
}

export interface Stats{
  base_stat: number;
  stat: {
    name: string;
  };
}

export interface Abilities{
  ability: {
    name: string;
  };
}



export interface Pokemon {
  id?: number;
  name: string;
  moves?: Moves[];
  types?: Types[];
  stats?: Stats[];
  abilities?: Abilities[];
  weight?: number;
  height?: number;
  artwork?: string;
  image?: string;
  nickname?: string;
}


interface PokemonResult {
  count: number;
  nextOffset: number;
  prevOffset: number;
  results: Pokemon[];
}

export interface PokemonData {
  pokemons: PokemonResult;
}

export interface PokemonDetail {
  pokemon: Pokemon;
}

export interface PokemonVars {
  limit?: number;
  offset?: number;
  name?: string;
}