import React from 'react';
import { RecoilRoot } from 'recoil';

import {
  ChakraProvider,
  Box,
  Heading,
  theme,
  Flex,
  CSSReset,
} from '@chakra-ui/react';

import Thing from './components/thing/thing'
import MovieSearchBar from './components/searchbar/movie-searchbar';
import List from './components/movie-list/List';
import NominaionList from './components/movie-list/NominationList';
import Banner from './components/banner/banner';

const config = theme => ({
  light: {
    color: theme.colors.gray[700],
    bg: theme.colors.red[500],
    borderColor: theme.colors.gray[200],
    placeholderColor: theme.colors.gray[500],
  },
  dark: {
    color: theme.colors.whiteAlpha[900],
    bg: theme.colors.gray[800],
    borderColor: theme.colors.whiteAlpha[300],
    placeholderColor: theme.colors.whiteAlpha[400],
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset config={config} />
      <RecoilRoot>
        <Box minH="full" bg="#f3f6f8">
          <Banner />
          <Thing/>
          <Box py={78} px={180} maxW={1800} mx={'auto'}>
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
        </Box>
      </RecoilRoot>
    </ChakraProvider>
  );
}

export default App;
