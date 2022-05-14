/* eslint-disable no-unused-vars */
import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import { LoadingButton } from '@mui/lab';
import { Pokemon } from '../../query/types';
import useCreatePokemon from '../../hooks/pokemon/useCreatePokemon';

interface AddFormProps {
  pokemon: Pokemon;
  onSuccess: (pokemon: Pokemon) => void;
}

function AddForm({ pokemon, onSuccess}: AddFormProps) {
  const [name, setName] = useState("");
  const [create, { loading, error }] = useCreatePokemon();
  const onSubmit = async (e: React.SyntheticEvent) => {
    try {
      e.preventDefault();
      const result = await create(name, pokemon);
      onSuccess(result);
    } catch (_) {
      // console.error(error);
    }
  };
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setName(e.target.value);
  };
  return (
    <form onSubmit={onSubmit}>
      <Box sx={{ mt: 5 }}>
        <Typography sx={{ mb: 3 }}>
          Now enter your {pokemon.name} nickname
        </Typography>
        <TextField id="name" name="name" onChange={handleChange} />
        {error && <Typography sx={{ mt: 3, color: "text-error" }}>{error}</Typography>}
      </Box>
      <Box>
        <Button
          type="submit"
          // loading={loading}
          // label="Submit"
          sx={{ mt: 500 }}
        />
        <LoadingButton
        size="medium"
        type="submit"
        variant="contained"
        loading={loading}
        sx={{ 
          display: 'flex',
          alignItems: 'center',
          position: 'absolute',
          justifyContent: 'space-between'
        }}
       />
      </Box>
    </form>
  )
}

export default AddForm;