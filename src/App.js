import React, { useState } from 'react';
import { RecoilRoot } from 'recoil';

import { ChakraProvider, Box, Heading, theme, Flex, Center } from '@chakra-ui/react';

import MovieCard from './components/movie/movie-card';
// import { ColorModeSwitcher } from './ColorModeSwitcher';

import MovieSearchBar from './components/searchbar/movie-searchbar';
import List from './components/movie-list/List';
import NominaionList from './components/movie-list/NominaionList';

function App() {
  const [appState, setAppState] = useState({
    loading: false,
    movies: null,
  });

  return (
    <ChakraProvider theme={theme}>
      <RecoilRoot>
        <Box py={90} px={300} bg="#f3f6f8" >
          <Heading>The Shoppies</Heading>

          <MovieSearchBar />

          <Flex justifyContent="space-between">
            <Box bg="white" minW="500px" maxW="lg" p={8}>
              <List />
            </Box>
            <Box bg="white" minW="500px" maxW="lg" p={8}>
              <NominaionList />
            </Box>
          </Flex>
        </Box>
      </RecoilRoot>
    </ChakraProvider>
  );
}

export default App;
