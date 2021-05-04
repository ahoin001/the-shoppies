import React from 'react';
import { useRecoilValue } from 'recoil';
import { nominationListState } from '../../atoms/atoms';
import { Box, Heading, ListItem, UnorderedList } from '@chakra-ui/react';
import Movie from '../movie/movie';

const NominaionList = props => {
  const nominations = useRecoilValue(nominationListState);

  if (!nominations || nominations.length === 0) return <p>Nominate a Movie!</p>;

  return (
    <Box bg="lightcyan" maxW="lg">
      <UnorderedList styleType="none">
        <Heading bg="lightblue">{props.heading}</Heading>

        {movies.map(movie => {
          return (
            <ListItem key={movie.imdbID}>
              {/* FOr now use NominatedList prop to format Movie component for nomination list */}
              <Movie Nominated movie={movie} />
            </ListItem>
          );
        })}
      </UnorderedList>
    </Box>
  );
};
export default NominaionList;
