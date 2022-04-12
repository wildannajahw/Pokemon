import { createTheme, ThemeOptions, ThemeProvider } from '@mui/material';
// import React{ useMemo } from 'react';
import React, { useMemo } from 'react';
import { useSelector } from './redux/store'
import Coba from './component/Coba';
import typography from './theme/typography';
import breakpoints from './theme/breakpoints';
import shadows, { customShadows } from './theme/shadows';
import palette from './theme/palette';
// import getTheme from './theme/theme';

function App() {
  const { mode } = useSelector((state)=>state.theme);
  const isLight = mode === 'light';
  const themeOptions: ThemeOptions = useMemo(
    () => ({
      palette: isLight ? palette.light : palette.dark,
      typography,
      breakpoints,
      shape: { borderRadius: 8 },
      shadows: isLight ? shadows.light : shadows.dark,
      customShadows: isLight ? customShadows.light : customShadows.dark,
    }),
    [isLight]
  );
  const theme = createTheme(themeOptions);
  return (
    <ThemeProvider theme={theme}>
      <Coba />
    </ThemeProvider>
  )
}

export default App