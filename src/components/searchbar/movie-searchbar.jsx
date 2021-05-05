import React, { useState, useEffect, useCallback } from 'react';
import { useSetRecoilState } from 'recoil';
import { movieListState } from '../../atoms/atoms';

import { Box, Heading } from '@chakra-ui/react';
import { Input, Button } from '@chakra-ui/react';

// Might replace with custom debounce for practice but this works
import debounce from 'lodash.debounce';

const MovieSearchBar = () => {
  const setMovieList = useSetRecoilState(movieListState);

  const [searchState, setSearchState] = useState({
    searchTitle: '',
    loading: false,
  });

  const handleInputChange = e => {
    setSearchState({ searchTitle: e.target.value });
  };

  const fetchMovies = async movieTitle => {
    let apiUrl = `http://www.omdbapi.com/?s=${movieTitle}&type=movie&apikey=3efca87a`;

    try {
      await fetch(apiUrl)
        .then(res => res.json())
        .then(movies => {
          console.log('FROM fetch: ', movies);
          setMovieList(movies.Search);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const debouncedFetch = useCallback(debounce(fetchMovies, 380), []);

  useEffect(() => {
    if (searchState.searchTitle.length > 0) {
      debouncedFetch(searchState.searchTitle.trim());
    }
  }, [searchState.searchTitle]);

  return (
    <Box>
      <Heading>Movie Title</Heading>
      <Input
        type="text"
        placeholder="Search Movies"
        value={searchState.searchTitle || ''}
        onChange={handleInputChange}
        // onChange={debounceOnChange}
      />
    </Box>
  );
};

export default MovieSearchBar;
