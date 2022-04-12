import { Container } from '@mui/material';
import React from 'react'
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
      {pokemons?.map(({ name,image }) => {
        const props= {
          name,
        };
        return <PokemonCard {...props} image={image} />;
      })}
    </Container>
  )
}

export default PokemonList