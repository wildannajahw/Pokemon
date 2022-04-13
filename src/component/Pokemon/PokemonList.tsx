import { Container } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import { PokemonListProps } from './types';
import PokemonCard from './PokemonCard';

function PokemonList({ pokemons }: PokemonListProps) {
  return (
    <Container
      sx={{
        pt: '1rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
        gridGap: '1rem',
      }}
    >
      {pokemons?.map(({ name,artwork,image,nickname }) => {
        const props= {
          name,
        };
        return (
          <Link
            key={nickname}
            to={{
              pathname: `/pokemon/${name}`,
            }}
            state={{ artwork }}
          >
          <PokemonCard {...props} image={image} />
          </Link>
        );
      })}
    </Container>
  )
}

export default PokemonList