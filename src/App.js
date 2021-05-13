import React from 'react';
import { RecoilRoot } from 'recoil';

import { ChakraProvider, Box, Heading, Flex } from '@chakra-ui/react';
import theme from '../src/theme/theme';

import NominationGrid from './components/grid/nominations-grid';
import MoviesGrid from './components/grid/movies-grid';

import MovieSearchBar from './components/searchbar/movie-searchbar';
import Banner from './components/banner/banner';
import {ColorModeSwitcher} from './ColorModeSwitcher'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <RecoilRoot>
        <Box minH="full">
          <Banner />
<ColorModeSwitcher/>
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
