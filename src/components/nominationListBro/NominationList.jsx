import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { nominationListState } from '../../atoms/atoms';
import { Heading, ListItem, UnorderedList } from '@chakra-ui/react';
import MovieCard from '../movie/movie-card';

import './list-animations.css';

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
      <TransitionGroup >
        <Heading size="md">Nominations</Heading>
        {nominations.map(movie => {
          return (
            <CSSTransition
              key={movie.imdbID}
              timeout={400}
              classNames="animate"
            >
              <ListItem
              // key={movie.imdbID}
              >
                <MovieCard removableNominee movie={movie} />
              </ListItem>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </UnorderedList>
  );
};
export default NominationList;
