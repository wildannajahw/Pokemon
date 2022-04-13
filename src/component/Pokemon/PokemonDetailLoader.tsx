import { Box, Grid, Skeleton, Stack } from "@mui/material";
import React from "react";

export default function PokemonDetailLoader(){

  return (
    <Box sx={{
      minHeight: '100vh',
      bgcolor: 'background.default',
    }}>
      <Stack direction='row' spacing={2} paddingTop={10} justifyContent="center">
        <Skeleton 
          sx={{
            alignItems: "center", justifyContent: "center", height: "150px"
          }}
          variant="circular" width={125} height={125} 
          
          />
        <Box
          sx={{
            marginY: 'auto !important',
          }}
        >
          <Skeleton variant="text" width='150px'/>
          <Skeleton variant="rectangular" width='75px'/>
        </Box>
      </Stack>
      <Stack
        spacing={2}
        sx={{
          borderRadius: "32px 32px 0px 0px",
          backgroundColor: "#fff",
          p: 4,
          mt: 4,
          minHeight: '70vh',
        }}
      >
        <Skeleton variant="text" width='150px'sx={{ bgcolor: 'grey.500' }}/>
        <Stack spacing={1}>
          <Grid item xs={4}>
            <Skeleton variant="text" sx={{ bgcolor: 'grey.500' }}/>
          </Grid>
          <Grid item xs={8}>
            <Skeleton variant="text" sx={{ bgcolor: 'grey.500' }}/>
          </Grid>
        </Stack>
        <Skeleton variant="text" width='150px'sx={{ bgcolor: 'grey.500' }}/>
        <Stack spacing={1}>
          <Grid item xs={4}>
            <Skeleton variant="text" sx={{ bgcolor: 'grey.500' }}/>
          </Grid>
          <Grid item xs={8}>
            <Skeleton variant="text" sx={{ bgcolor: 'grey.500' }}/>
          </Grid>
        </Stack>
        
      </Stack>

    </Box>
    
  )
  
}