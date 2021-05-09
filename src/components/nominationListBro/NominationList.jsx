import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { nominationListState } from '../../atoms/atoms';
import { Box, Heading, ListItem, UnorderedList } from '@chakra-ui/react';
import MovieCard from '../movie/movie-card';

import './list-animations.css';

const NominationList = () => {
  const [nominations, setNominationList] = useRecoilState(nominationListState);

  useEffect(() => {
    if (localStorage.getItem('savedNominations')) {
      setNominationList(JSON.parse(localStorage.getItem('savedNominations')));
    }
  }, []);

  return (
    <Box>
      <Heading size="md">Nominations</Heading>
      <UnorderedList styleType="none">
        <TransitionGroup>
          {nominations.map(movie => (
            <CSSTransition
              key={movie.imdbID}
              timeout={400}
              classNames="animate"
            >
              <ListItem key={movie.imdbID}>
                <MovieCard removableNominee movie={movie} />
              </ListItem>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </UnorderedList>
    </Box>
  );
};
export default NominationList;
