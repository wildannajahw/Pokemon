/* eslint-disable no-unused-vars */
import { keyframes, Typography, Box, Button } from '@mui/material';
import React, { useState } from 'react'

export interface PokeCatchProps {
  name: string;
  // eslint-disable-next-line react/require-default-props
  image?: string;
}
const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }

  70% {
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
`;

function PokemonCatch({ name, image }: PokeCatchProps) {
  const [result, setResult] = useState<boolean | null>(null);

  const handleGatcha = () => {
    setResult(Math.random() < 0.5);
    console.log(result);
  };
  return (
    <Box
      sx={{
          position: "fixed",
          bottom: "1rem",
          left: "calc(50vw - 75px)",
        }}
      >
      <Button
        onClick={handleGatcha}
      >
        <Typography
        >
          Catch
        </Typography>
      </Button>
    </Box>
  )
}

export default PokemonCatch