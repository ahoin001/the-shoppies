import React, { useEffect, useCallback } from 'react';
import { useSetRecoilState, useRecoilState } from 'recoil';
import {
  movieListState,
  movieSearchTitleState,
  nominationListState,
  isLoadingState,
} from '../../atoms/atoms';

import {
  Box,
  Heading,
  Input,
  Button,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
  Flex,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

import DarkModeToggle from './darkmode-toggle';

// Might replace with custom debounce for practice but this works
import debounce from 'lodash.debounce';

const MovieSearchBar = () => {
  const [searchMovieTitle, setSearchMovieTitle] = useRecoilState(
    movieSearchTitleState
  );
  const [isLoading, setIsLoading] = useRecoilState(isLoadingState);
  const setMovieList = useSetRecoilState(movieListState);
  const setNominationList = useSetRecoilState(nominationListState);

  const handleInputChange = e => {
    // console.log('States BEFORE are ' + searchState + ' and ' + isLoading);
    setSearchMovieTitle(e.target.value);
    setIsLoading(true);
    // console.log('States AFTER are ' + searchState + ' and ' + isLoading);
  };

  const clearNominations = () => {
    localStorage.clear();
    setNominationList([]);
  };

  const fetchMovies = async movieTitle => {
    // console.log('Called fetch loading is : ', isLoading);
    let apiUrl = `https://www.omdbapi.com/?s=${movieTitle}&type=movie&apikey=3efca87a`;
    if (isLoading) {
      try {
        await fetch(apiUrl)
          .then(res => res.json())
          .then(movies => {
            // console.log('FROM fetch: ', movies);
            setMovieList(movies.Search);
            setIsLoading(false);
          });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const debouncedFetch = useCallback(debounce(fetchMovies, 380), []);

  useEffect(() => {
    if (searchMovieTitle.length > 0) {
      debouncedFetch(searchMovieTitle.trim());
    }
  }, [searchMovieTitle, isLoading]);

  const color = useColorModeValue('gray.800', 'white');
  const containerBg = useColorModeValue('gray.200', 'gray.700');

  const searchBg = useColorModeValue('white', 'hsl(217,23%,22%)');

  return (
    <Box bg={containerBg} my={7} px={7} py={6} minW="500px">
      <Heading size="md" color={color}>
        Movie Title
      </Heading>
      <Flex direction="column">
        <InputGroup mt={4} w={'full'}>
          <InputLeftElement pointerEvents="none" children={<SearchIcon />} />
          <Input
            bg={searchBg}
            type="text"
            placeholder="Search Movies"
            value={searchMovieTitle || ''}
            onChange={handleInputChange}
          />
        </InputGroup>

        <Flex mt={5} maxW={300} justifyContent="space-between">
          <Button maxW="180px" onClick={clearNominations}>
            Clear Nominations
          </Button>
          <DarkModeToggle />
        </Flex>
      </Flex>
    </Box>
  );
};

export default MovieSearchBar;
