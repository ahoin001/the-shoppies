import React from 'react';
import { useRecoilValue } from 'recoil';
import {
  movieListState,
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
import Movie from '../movie/movie';
import MovieCard from '../movie/movie-card';

const List = props => {
  let movies = useRecoilValue(movieListState);
  let nominations = useRecoilValue(nominationListState);
  const isLoading = useRecoilValue(isLoadingState);

  console.log('========nominations=========', nominations);
  console.log('========movies=========', movies);

  if (!movies || movies.length === 0)
    return <p>Type in eligible movie title!</p>;
  if (isLoading) return <Spinner />;

  return (
    <Box bg="lightcyan" maxW="lg">
      <UnorderedList styleType="none">
        <Heading bg="lightblue">Movies</Heading>

        {movies.map(movie => {
          return (
            <Box key={movie.imdbID} w="100%">
              <ListItem>
                {/* Check if the movie is already in nominatedList */}
                {nominations.some(movieToCheckForNomination => {
                  return movieToCheckForNomination.imdbID === movie.imdbID;
                }) ? (
                  // <Movie isNominatedAlready movie={movie} />
                  <MovieCard isNominatedAlready movie={movie} />
                ) : (
                  // <Movie isNominee movie={movie} />
                  <MovieCard isNominee movie={movie} />
                )}
              </ListItem>
            </Box>
          );
        })}
      </UnorderedList>
    </Box>
  );
};
export default List;
