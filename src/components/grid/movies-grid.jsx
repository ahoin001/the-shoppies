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
  Center,
  useColorModeValue,
} from '@chakra-ui/react';

import MovieCard from '../movie/movie-card';

export default function MoviesGrid() {
  let movies = useRecoilValue(movieListState);
  let movieSearchTitle = useRecoilValue(movieSearchTitleState);
  let nominations = useRecoilValue(nominationListState);
  const isLoading = useRecoilValue(isLoadingState);

  const bg = useColorModeValue('white', 'hsl(217,23%,22%)');

  if (!movies || movies.length === 0)
    return <Heading size="md" mt={8}>Type movie titles in search bar and see them here!</Heading>;
  if (isLoading) return <Center><Spinner size="xl"/></Center>;

  if (nominations.length > 4) {
    return (
      <Box bg={bg} p={8}>
        
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
    <Box bg={bg} p={8}>
      <Heading size="lg"  pb={4}>{`Results for: "${movieSearchTitle}"`} </Heading>
      <SimpleGrid minChildWidth="250px" spacing="20px" justifyItems="center">
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
