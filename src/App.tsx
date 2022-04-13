import { createTheme, ThemeOptions, ThemeProvider } from '@mui/material';
import React, { lazy, Suspense, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from './redux/store'
import typography from './theme/typography';
import breakpoints from './theme/breakpoints';
import shadows, { customShadows } from './theme/shadows';
import palette from './theme/palette';
import PageLoader from './component/PageLoader';

const Home = lazy(() => import('./pages/home'));
const Pokemon = lazy(() => import('./pages/Pokemon/pokemon'));
const PokemonDetail = lazy(() => import('./pages/Pokemon/detail'));

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
      <Router>
        <Suspense fallback={<PageLoader/>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokemon" element={<Pokemon/>} />
            <Route path="/pokemon/:id" element={<PokemonDetail/>} />
          </Routes>
        </Suspense>
      </Router>
    </ThemeProvider>
  )
}

export default App