
/* eslint-disable no-unused-vars */
import React from "react";
import { Card, Container, Skeleton } from "@mui/material";
import { PokemonCardLoaderProps } from "./types";

export default function PokemonCardLoader({ length }: PokemonCardLoaderProps) {
  return (
    <Container
      sx={{
        pt: '1rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
        gridGap: '1rem',
      }}
    >
      {[...new Array(length)].map((_, _index) => (
        <Card
        sx={{ 
          position: 'relative',
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          minHeight: '50px',
         }}
        >
          <Skeleton variant="text" width='50%'/>
          <Skeleton 
          sx={{
            position: "absolute",
            mr: 2,
            right: 0,
          }}
          variant="circular" width={50} height={50} 
          
          />
        </Card>
      ))}
    </Container>
  );
}