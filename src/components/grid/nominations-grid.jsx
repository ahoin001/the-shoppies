import React, { useEffect } from 'react';
import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import { useRecoilState } from 'recoil';

import { nominationListState } from '../../atoms/atoms';
import MovieCard from '../movie/movie-card';

import './list-animations.css';

export default function MovieGrid() {
  const [nominations, setNominationList] = useRecoilState(nominationListState);

  useEffect(() => {
    if (localStorage.getItem('savedNominations')) {
      setNominationList(JSON.parse(localStorage.getItem('savedNominations')));
    }
  }, []);

  return (
    <Box bg="gray.300" minh="800px" minW="500px" p={5} my={5} textAlign="center">
      <Heading mb={3}>Nominations</Heading>

      <SimpleGrid minChildWidth="200px" spacing="20px" justifyItems="center">
        {nominations.map(movie => (
          <Box key={movie.imdbID}>
            <MovieCard removableNominee movie={movie} />
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}
