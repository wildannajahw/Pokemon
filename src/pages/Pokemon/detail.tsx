/* eslint-disable arrow-body-style */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import React, { lazy, Suspense } from "react";
import { useQuery } from "@apollo/client";
import { useParams, useLocation } from "react-router-dom";
import { Box, Card, Grid, Stack, Typography } from "@mui/material";
import { url } from "inspector";
import { GET_POKEMON } from "../../query";
import { PokemonDetail,PokemonVars } from "../../query/types";
import Page from "../../component/Page";
import PokemonDetailLoader from "../../component/Pokemon/PokemonDetailLoader";

type RouterParams = {
  id: string;
};

type LocationState = {
  artwork?: string;
};
export default function Detail() {
  const { id } = useParams() as RouterParams;
  const { state } = useLocation();
  const { data, loading, error } = useQuery<PokemonDetail, PokemonVars>(
    GET_POKEMON,
    {
      variables: {
        name: id,
      },
    }
  );
  
  const { artwork: pokeImage } = state as LocationState|| {};
  const { pokemon } = data || {};
  const { types, moves, abilities, stats, weight, height } = pokemon || {};
  return (
    <Page title="">
      {loading? (
        <PokemonDetailLoader/>
      ) : (
        <Box sx={{
          backgroundColor:`pokemon.background.${types?.[0]?.type?.name}`,
          minHeight:'100vh',
        }}>
          <Stack direction='row' spacing={2} paddingTop={10} justifyContent="center" >
  
            <Box
              component="img"
              src={pokeImage}
              sx={{ alignItems: "center", justifyContent: "center", height: "150px"}}
            />
            <Box sx={{
              marginY: 'auto !important',
            }}>
              <Typography variant="h3" color="#fff">
                {pokemon?.name}
              </Typography>
              <Stack direction='row' spacing={1}>
                {
                  types?.map(({ type }) => {
                    const srcImg = `/assets/${type.name}.svg`;
                    return (
                      <Stack
                        direction='row'
                        sx={{
                          backgroundColor: `pokemon.type.${type.name}`,
                          padding: '0.25rem',
                          borderRadius: '0.25rem',
                        }}
                      >
                        <img src={srcImg} alt="asd" color="#fff" width='15px' style={{
                          marginRight: '0.25rem',
                        }}/>
                        <Typography variant="body2" color="#fff" key={type.name} textTransform='capitalize'>
                          {type.name}
                        </Typography>
                      </Stack>
                    )
                  })
                }
              </Stack>
            </Box>
          </Stack>
          <Stack 
          spacing={2}
            sx={{
              borderRadius: "32px 32px 0px 0px",
              backgroundColor: "#fff",
              p: 4,
            }}
          >
            <Typography 
              fontWeight='bold' 
              variant="body1"
              sx={{
                color: `pokemon.type.${types?.[0]?.type?.name}`,
              }}
            >
              Pokedex Data
            </Typography>
            <Grid container>
  
              <Grid item xs={4}>
                <Typography fontWeight='bold' variant="body2">
                  Height
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="body2">
                  {height ? height/10 : ''}m
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography fontWeight='bold' variant="body2">
                  Weight
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="body2">
                  {weight ? weight/10 : ''}kg
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography fontWeight='bold' variant="body2">
                  Abilities
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="body2">
                  {abilities?.map(({ ability }) => ability.name).join(", ")}
                </Typography>
              </Grid>
  
  
            </Grid>
  
            <Typography 
              fontWeight='bold' 
              variant="body1"
              sx={{
                color: `pokemon.type.${types?.[0]?.type?.name}`,
              }}
            >
              Base Stats
            </Typography>
            <Grid container>
              {
                stats?.map(({ stat, base_stat }) => (
                  <><Grid item xs={4} key={stat.name}>
                    <Typography textTransform='capitalize' fontWeight='bold' variant="body2">
                      {
                        stat.name.replace('special-', 'Sp.')
                      }
                    </Typography>
                  </Grid><Grid item xs={8} key={stat.name}>
                      <Typography variant="body2">
                        {base_stat}
                      </Typography>
                    </Grid></>
                ))
              }
            </Grid>
            <Grid container>
              <Grid item xs={4}>
                <Typography 
                  fontWeight='bold' 
                  variant="body1"
                  sx={{
                    color: `pokemon.type.${types?.[0]?.type?.name}`,
                  }}
                >
                  Moves
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="body2">
                  {moves?.map(({ move }) => move.name).join(", ")}
                </Typography>
              </Grid>
            </Grid>
  
            
          </Stack>
  
        </Box> 
      )}
      
    </Page>
  )
}