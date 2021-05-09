import React from 'react';
import { RecoilRoot } from 'recoil';

import { ChakraProvider, Box, Heading, theme, Flex } from '@chakra-ui/react';

import NominationGrid from './components/grid/nominations-grid';
import MoviesGrid from './components/grid/movies-grid';

import MovieSearchBar from './components/searchbar/movie-searchbar';
import Banner from './components/banner/banner';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <RecoilRoot>
        <Box minH="full" bg="#f3f6f8">
          <Banner />
          <Box py={78} px="50px" maxW={2000} mx={'auto'}>
            <Heading>The Shoppies</Heading>

            <Flex direction="column">
              <MovieSearchBar />

              <NominationGrid />

              <MoviesGrid />
            </Flex>
          </Box>
        </Box>
      </RecoilRoot>
    </ChakraProvider>
  );
}

export default App;
