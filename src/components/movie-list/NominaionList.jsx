import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { nominationListState } from '../../atoms/atoms';
import { Box, Heading, ListItem, UnorderedList } from '@chakra-ui/react';
import MovieCard from '../movie/movie-card';

const NominaionList = ({ isNominatedList }) => {
  const [nominations, setNominationList] = useRecoilState(nominationListState);

  useEffect(() => {
    console.log('LOCALSTORAGE: ', JSON.parse(localStorage.getItem('savedNominations')));
    if (localStorage.getItem('savedNominations')) {
      setNominationList(JSON.parse(localStorage.getItem('savedNominations')));
    }
  }, []);

  // console.log('=================', nominations);
  //  TODO COME BACK AND ADD LOADING SCREEN
  if (!nominations || nominations.length === 0) return <Heading size="md">Nominate a Movie!</Heading>;

  return (
    <UnorderedList styleType="none">
      <Heading size="md">Nominations</Heading>
      {nominations.map(movie => {
        return (
          <ListItem key={movie.imdbID}>
            {/* For now use NominatedList prop to format Movie component for nomination list */}
            <MovieCard removableNominee movie={movie} />
          </ListItem>
        );
      })}
    </UnorderedList>
  );
};
export default NominaionList;
