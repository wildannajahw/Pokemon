import { createTheme, ThemeProvider } from '@mui/material';
import React from 'react'
import { useSelector } from './redux/store'
import Coba from './component/Coba';
import getTheme from './theme/theme';

function App() {
  const { mode } = useSelector((state)=>state.theme);
  const theme = React.useMemo(() => createTheme(getTheme(mode)), [mode]);
  
  return (
    <ThemeProvider theme={theme}>
      <Coba />
    </ThemeProvider>
  )
}

export default App