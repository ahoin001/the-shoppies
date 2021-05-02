import React, { useEffect, useState } from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';

import List from './components/movie-list/List';

function App() {
  const [appState, setAppState] = useState({
    loading: false,
    movies: null,
  });

  useEffect(() => {
    const apiUrl = 'http://www.omdbapi.com/?s=batman&apikey=3efca87a';

    fetch(apiUrl)
      .then(res => res.json())
      .then(movies => {
        setAppState({ loading: false, movies: movies.Search });
      });
  }, [setAppState]);

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl"></Box>
      <List movies={appState.movies} />
    </ChakraProvider>
  );
}

export default App;
