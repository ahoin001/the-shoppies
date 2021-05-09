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
    if (localStorage.getItem('savedNominations')) {
      setNominationList(JSON.parse(localStorage.getItem('savedNominations')));
    }
  }, []);

  if (!nominations || nominations.length === 0)
    return <Heading size="md">Nominate a Movie!</Heading>;

  return (
    <UnorderedList styleType="none">
      <Heading size="md">Nominations</Heading>
      <TransitionGroup>
        {nominations.map(movie => {
          return (
            <CSSTransition
              key={movie.imdbID}
              timeout={400}
              classNames="animate"
            >
              <ListItem key={movie.imdbID}>
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
