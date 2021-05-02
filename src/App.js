import React, { useState } from 'react';
import { RecoilRoot } from 'recoil';
import { ChakraProvider, Box, Heading, theme } from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';

import List from './components/movie-list/List';
import MovieSearchBar from './components/searchbar/movie-searchbar';

function App() {
  const [appState, setAppState] = useState({
    loading: false,
    movies: null,
  });

  // useEffect(() => {
  //   const apiUrl = 'http://www.omdbapi.com/?s=batman&apikey=3efca87a';

  //   fetch(apiUrl)
  //     .then(res => res.json())
  //     .then(movies => {
  //       console.log(movies)
  //       setAppState({ loading: false, movies: movies.Search });
  //     });
  // }, [setAppState]);

  return (
    <ChakraProvider theme={theme}>
      <RecoilRoot>
      <Heading>The Shoppies</Heading>
        <Box textAlign="center">
          <MovieSearchBar />
          <List movies={appState.movies} />
        </Box>
      </RecoilRoot>
    </ChakraProvider>
  );
}

export default App;
