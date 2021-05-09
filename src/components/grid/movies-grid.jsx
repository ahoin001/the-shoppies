import React from 'react';

import { useRecoilValue } from 'recoil';
import {
  movieListState,
  movieSearchTitleState,
  nominationListState,
  isLoadingState,
} from '../../atoms/atoms';
import {
  Box,
  Heading,
  Spinner,
  SimpleGrid,
  Center
} from '@chakra-ui/react';

import MovieCard from '../movie/movie-card';

export default function MoviesGrid() {
  let movies = useRecoilValue(movieListState);
  let movieSearchTitle = useRecoilValue(movieSearchTitleState);
  let nominations = useRecoilValue(nominationListState);
  const isLoading = useRecoilValue(isLoadingState);

  if (!movies || movies.length === 0)
    return <Heading size="md">Type in eligible movie title!</Heading>;
  if (isLoading) return <Center><Spinner size="xl"/></Center>;

  if (nominations.length > 4) {
    return (
      <Box bg="white" p={8}>
        
        <Heading size="lg" pb={4}>{`Results for: "${movieSearchTitle}"`} </Heading>

        <SimpleGrid minChildWidth="250px" spacing="20px" justifyItems="center">
          {movies.map(movie => {
            return (
              <Box key={movie.imdbID} w="100%">
                <MovieCard isNominatedAlready movie={movie} />
              </Box>
            );
          })}
        </SimpleGrid>
      </Box>
    );
  }

  return (
    <Box bg="white" p={8}>
      <Heading size="lg"  pb={4}>{`Results for: "${movieSearchTitle}"`} </Heading>
      <SimpleGrid minChildWidth="200px" spacing="20px" justifyItems="center">
        {movies.map(movie => {
          return (
            <Box key={movie.imdbID} w="100%">
              {/* Check if the movie is already in nominatedList */}
              {nominations.some(movieToCheckForNomination => {
                return movieToCheckForNomination.imdbID === movie.imdbID;
              }) ? (
                <MovieCard isNominatedAlready movie={movie} />
              ) : (
                <MovieCard isNominee movie={movie} />
              )}
            </Box>
          );
        })}
      </SimpleGrid>
    </Box>
  );
}
