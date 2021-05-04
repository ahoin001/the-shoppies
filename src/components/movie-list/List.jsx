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
                <Movie movie={movie} />
              </ListItem>
              {/* <Button></Button> */}
            </Box>
          );
        })}
      </UnorderedList>
    </Box>
    
  );
};
export default List;
