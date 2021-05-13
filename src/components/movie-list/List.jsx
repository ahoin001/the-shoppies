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
  ListItem,
  UnorderedList,
  Spinner,
} from '@chakra-ui/react';

import MovieCard from '../movie/movie-card';

const List = props => {
  let movies = useRecoilValue(movieListState);
  let movieSearchTitle = useRecoilValue(movieSearchTitleState);
  let nominations = useRecoilValue(nominationListState);
  const isLoading = useRecoilValue(isLoadingState);

  if (!movies || movies.length === 0)
    return <Heading size="md">Type in eligible movie title!</Heading>;
  if (isLoading) return <Spinner />;
  if (nominations.length > 4) {
    return (
      <UnorderedList bg="blue" styleType="none">
        <Heading size="md">{`Results for: ${movieSearchTitle}`} </Heading>

        {movies.map(movie => {
          return (
            <Box key={movie.imdbID} w="100%">
              <ListItem>
                <MovieCard isNominatedAlready movie={movie} />
              </ListItem>
            </Box>
          );
        })}
      </UnorderedList>
    );
  }

  return (
    <UnorderedList styleType="none">
      <Heading size="md">{`Results for: ${movieSearchTitle}`} </Heading>
      {movies.map(movie => {
        return (
          <Box key={movie.imdbID} w="100%">
            <ListItem>
              {/* Check if the movie is already in nominatedList */}
              {nominations.some(movieToCheckForNomination => {
                return movieToCheckForNomination.imdbID === movie.imdbID;
              }) ? (
                <MovieCard isNominatedAlready movie={movie} />
              ) : (
                <MovieCard isNominee movie={movie} />
              )}
            </ListItem>
          </Box>
        );
      })}
    </UnorderedList>
  );
};
export default List;
