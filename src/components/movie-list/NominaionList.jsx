import React from 'react';
import { useRecoilValue } from 'recoil';
import { nominationListState } from '../../atoms/atoms';
import { Box, Heading, ListItem, UnorderedList } from '@chakra-ui/react';
import MovieCard from '../movie/movie-card';

const NominaionList = ({ isNominatedList }) => {
  const nominations = useRecoilValue(nominationListState);

  console.log('=================', nominations);
  //  TODO COME BACK AND ADD LOADING SCREEN
  if (!nominations || nominations.length === 0) return <p>Nominate a Movie!</p>;

  return (
    <UnorderedList styleType="none">
      <Heading size="md">Nominations</Heading>
      {nominations.map(movie => {
        return (
          <ListItem key={movie.imdbID}>
            {/* FOr now use NominatedList prop to format Movie component for nomination list */}
            <MovieCard removableNominee movie={movie} />
          </ListItem>
        );
      })}
    </UnorderedList>
  );
};
export default NominaionList;
