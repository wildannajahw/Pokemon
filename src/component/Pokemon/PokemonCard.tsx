import { Card, Typography } from '@mui/material';
import React from 'react'
import { PokemonCardProps } from './types';

function PokemonCard({
  name,
  image,
}: PokemonCardProps) {
  return (
    <Card sx={{ 
      position: 'relative',
      p: 2,
      display: 'flex',
      flexDirection: 'column',
      minHeight: '50px',
      justifyContent: 'center'
     }}>
      <img
        src={image}
        alt={name}
        // sx={{
          // width: "100px",
          // height: "100px",
        //   position: "absolute",
        //   top: "50%",
        //   transform: "translateY(-50%)",
        //   right: 0,
        //   bottom:0
        // }}
        style={{
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          right: 0,
          bottom:0,
          width: "100px",
          height: "100px",
        }}

      />
      <Typography
        // variant="label"
        sx={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          textTransform: "capitalize",
        }}
      >
        {name}
      </Typography>
      
    </Card>
  )
}

export default PokemonCard