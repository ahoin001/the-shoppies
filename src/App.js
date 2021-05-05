import React, { useState } from 'react';
import { RecoilRoot } from 'recoil';

import {
  ChakraProvider,
  Box,
  Heading,
  theme,
  Flex,
} from '@chakra-ui/react';

import StyledCard from './components/movie/styledcard'
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

        <Heading>The Shoppies</Heading>
        <Box>
          <MovieSearchBar />
          <Flex justifyContent="space-between">
            <List />
            <NominaionList />
          </Flex>
        </Box>
      </RecoilRoot>
    </ChakraProvider>
  );
}

export default App;
