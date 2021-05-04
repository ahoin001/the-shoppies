import React from 'react';
import { useRecoilValue } from 'recoil';
import { movieListState, nominationListState } from '../../atoms/atoms';
import {
  Box,
  Button,
  Heading,
  HStack,
  VStack,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react';
import Movie from '../movie/movie';

const List = props => {
  let movies = useRecoilValue(movieListState);
  let nominations = useRecoilValue(nominationListState);

  console.log('========nominations=========', nominations);
  console.log('========movies=========', movies);

  //  TODO COME BACK AND ADD LOADING SCREEN

  if (!movies || movies.length === 0) return <p>Search for some movies!</p>;

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
                  <Movie isNominatedAlready movie={movie} />
                ) : (
                  <Movie isNominee movie={movie} />
                )}
                {/* <Movie movie={movie} /> */}
              </ListItem>
            </Box>
          );
        })}
      </UnorderedList>
    </Box>
  );
};
export default List;
