import { gql } from "@apollo/client";

export const GET_POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      nextOffset
      prevOffset
      status
      message
      results {
        url
        name
        artwork
        image
      }
    }
  }
`;

export const GET_POKEMON = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      abilities{
        ability{
          name
        }
      }
      base_experience
      moves{
        move{
          name
        }
      }
      stats{
        base_stat
        stat{
          name
        }
      }
      types{
        type{
          name
        }
      }
      weight
      height
      
    }
  }
`;