import React, { useState } from 'react';
import { RecoilRoot } from 'recoil';

import { ChakraProvider, Box, Heading, theme,Flex, Spacer } from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';

import MovieSearchBar from './components/searchbar/movie-searchbar';
import List from './components/movie-list/List';
import NominaionList from './components/movie-list/NominaionList';

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
        <Box>
          <MovieSearchBar />
          <Flex justifyContent="space-between">
            <List />
            <NominaionList />
          </Flex>
            
          {/* </HStack> */}
        </Box>
      </RecoilRoot>
    </ChakraProvider>
  );
}

export default App;
