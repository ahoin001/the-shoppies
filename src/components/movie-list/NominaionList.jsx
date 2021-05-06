import React from 'react';
import { useRecoilValue } from 'recoil';
import { nominationListState } from '../../atoms/atoms';
import {
  Box,
  Heading,
  ListItem,
  UnorderedList,
  useToast,
} from '@chakra-ui/react';
import Movie from '../movie/movie';

const NominaionList = ({ isNominatedList }) => {
  const nominations = useRecoilValue(nominationListState);
  const toast = useToast();
  console.log('=================', nominations);
  //  TODO COME BACK AND ADD LOADING SCREEN
  if (!nominations || nominations.length === 0) return <p>Nominate a Movie!</p>;

  return (
    <Box bg="lightcyan" maxW="lg">
      <UnorderedList styleType="none">
        <Heading bg="lightblue">Nominations</Heading>

        {nominations.map(movie => {
          return (
            <ListItem key={movie.imdbID}>
              {/* FOr now use NominatedList prop to format Movie component for nomination list */}
              <Movie removableNominee movie={movie} />
            </ListItem>
          );
        })}
      </UnorderedList>
    </Box>
  );
};
export default NominaionList;
