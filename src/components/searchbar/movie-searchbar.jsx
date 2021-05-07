import React, { useState, useEffect, useCallback } from 'react';
import { useSetRecoilState, useRecoilState } from 'recoil';
import {
  movieListState,
  isLoadingState,
} from '../../atoms/atoms';

import { Box, Heading } from '@chakra-ui/react';
import { Input, Button } from '@chakra-ui/react';

// Might replace with custom debounce for practice but this works
import debounce from 'lodash.debounce';

const MovieSearchBar = () => {
  const setMovieList = useSetRecoilState(movieListState);
  const [isLoading, setIsLoading] = useRecoilState(isLoadingState);

  const [searchState, setSearchState] = useState('');

  const handleInputChange = e => {
    console.log('States BEFORE are ' + searchState + ' and ' + isLoading);
    setSearchState(e.target.value);
    setIsLoading(true);
    console.log('States AFTER are ' + searchState + ' and ' + isLoading);
  };

  const fetchMovies = async movieTitle => {
    console.log('Called fetch loading is : ', isLoading);
    let apiUrl = `http://www.omdbapi.com/?s=${movieTitle}&type=movie&apikey=3efca87a`;
    if (isLoading) {
      try {
        await fetch(apiUrl)
          .then(res => res.json())
          .then(movies => {
            console.log('FROM fetch: ', movies);
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
    <Box>
      <Heading>Movie Title</Heading>
      <Input
        type="text"
        placeholder="Search Movies"
        value={searchState || ''}
        onChange={handleInputChange}
      />
    </Box>
  );
};

export default MovieSearchBar;
