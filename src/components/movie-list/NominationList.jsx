import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { CSSTransition } from 'react-transition-group';

import { nominationListState } from '../../atoms/atoms';
import { Heading, ListItem, UnorderedList } from '@chakra-ui/react';
import MovieCard from '../movie/movie-card';

const NominationList = ({ isNominatedList }) => {
  const [nominations, setNominationList] = useRecoilState(nominationListState);

  useEffect(() => {
    console.log(
      'LOCALSTORAGE: ',
      JSON.parse(localStorage.getItem('savedNominations'))
    );
    if (localStorage.getItem('savedNominations')) {
      setNominationList(JSON.parse(localStorage.getItem('savedNominations')));
    }
  }, []);

  // console.log('=================', nominations);
  //  TODO COME BACK AND ADD LOADING SCREEN
  if (!nominations || nominations.length === 0)
    return <Heading size="md">Nominate a Movie!</Heading>;

  return (
    <UnorderedList styleType="none">
      <Heading size="md">Nominations</Heading>
      {nominations.map(movie => {
        return (
          // <CSSTransition>
            <ListItem key={movie.imdbID}>
              {/* For now use NominatedList prop to format Movie component for nomination list */}
              <MovieCard removableNominee movie={movie} />
            </ListItem>
          // </CSSTransition>
        );
      })}
    </UnorderedList>
  );
};
export default NominationList;
