/* eslint-disable no-unused-vars */

import { NetworkStatus, useQuery } from '@apollo/client';
import { Box, Button } from '@mui/material';
import React from 'react'
import Page from '../../component/Page';
import PokemonList from '../../component/Pokemon/PokemonList';
import PokemonCardLoader from '../../component/Pokemon/PokoemonCardLoader';
import { GET_POKEMONS } from '../../query';
import { PokemonData, PokemonVars } from '../../query/types';

function App() {
  const { data, fetchMore, error, networkStatus } = useQuery<
    PokemonData,
    PokemonVars
  >(GET_POKEMONS, {
    notifyOnNetworkStatusChange: true,
    variables: {
      offset: 0,
      limit: 10,
    },
  });
  // console.log(data);
  const { pokemons } = data || {};
  const { results, nextOffset } = pokemons || {};
  const hasMore = (nextOffset || -1) > 0;
  const loadingFirstTime = networkStatus === NetworkStatus.loading;
  const loadingFetchMore = networkStatus === NetworkStatus.fetchMore;
  const fetchNext = () => {
    try {
      fetchMore({
        variables: {
          offset: nextOffset,
          limit: 10,
        },
      });
    } catch (__) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };
  return (
    <Page  title=''>
      <Box>
        {!loadingFirstTime && results?.length && 
          <PokemonList pokemons={results} />
        }
        {(loadingFirstTime || loadingFetchMore) && 
          <PokemonCardLoader length={10} />
        }
        
        {hasMore && !loadingFirstTime && !loadingFetchMore && (
          <Box textAlign='center' padding={2}>
            <Button variant="contained" onClick={fetchNext}>Load More</Button>
          </Box>
        )}
      </Box>
    </Page>
    
  )
}

export default App;