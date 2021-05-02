import React from 'react';
import { useRecoilValue } from 'recoil';
import { movieListState } from '../../atoms/atoms';
import { Box, Heading } from '@chakra-ui/react';
import Movie from '../movie/movie';

const List = props => {
  const movies = useRecoilValue(movieListState);
  console.log('=================', movies);
  //  TODO COME BACK AND ADD LOADING SCREEN
  if (!movies || movies.length === 0) return <p>Search for some movies!</p>;

  return (
    <ul>
      <Heading bg="lightblue">Movies</Heading>

      {movies.map(movie => {
        return (
            <li key={movie.imdbID}><Movie movie={movie} /></li>
        );
      })}
    </ul>
  );
};
export default List;
