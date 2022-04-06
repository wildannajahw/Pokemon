import React from 'react';
import { Box, Button } from '@mui/material';
import { useDispatch, useSelector } from '../redux/store';
import { setTheme } from '../redux/slice/theme';


function Coba() {
  const { mode } = useSelector((state)=>state.theme);
  const dispatch = useDispatch();
  const changeTheme  = () =>{
    dispatch(setTheme(mode === 'dark' ? 'light' : 'dark'));
  }
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 1,
        p: 3,
      }}
    >
      <Button onClick={changeTheme} >
        Change Theme
      </Button>
    </Box>
  );
}

export default Coba;
