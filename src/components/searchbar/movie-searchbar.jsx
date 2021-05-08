import React, { useState, useEffect, useCallback } from 'react';
import { useSetRecoilState, useRecoilState } from 'recoil';
import {
  movieListState,
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
  Flex,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

// Might replace with custom debounce for practice but this works
import debounce from 'lodash.debounce';

const MovieSearchBar = () => {
  const setMovieList = useSetRecoilState(movieListState);
  const [isLoading, setIsLoading] = useRecoilState(isLoadingState);
  const setNominationList = useSetRecoilState(nominationListState);

  const [searchState, setSearchState] = useState('');

  const handleInputChange = e => {
    // console.log('States BEFORE are ' + searchState + ' and ' + isLoading);
    setSearchState(e.target.value);
    setIsLoading(true);
    // console.log('States AFTER are ' + searchState + ' and ' + isLoading);
  };

  const clearNominations = () => {
    localStorage.clear();
    setNominationList([]);
  };

  const fetchMovies = async movieTitle => {
    // console.log('Called fetch loading is : ', isLoading);
    let apiUrl = `http://www.omdbapi.com/?s=${movieTitle}&type=movie&apikey=3efca87a`;
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
    if (searchState.length > 0) {
      debouncedFetch(searchState.trim());
    }
  }, [searchState, isLoading]);

  return (
    <Box bg="white" my={7} px={7} py={6}>
      <Heading size="md">Movie Title</Heading>
      <Flex direction="column">
        <InputGroup mt={4} w={'full'}>
          <InputLeftElement pointerEvents="none" children={<SearchIcon />} />
          <Input
            type="text"
            placeholder="Search Movies"
            value={searchState || ''}
            onChange={handleInputChange}
          />
        </InputGroup>
        <Button maxW="180px" mt={5} onClick={clearNominations}>
          Clear Nominations
        </Button>
      </Flex>
    </Box>
  );
};

export default MovieSearchBar;
