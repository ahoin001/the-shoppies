import { Box, Heading } from '@chakra-ui/layout';
import { useRecoilState } from 'recoil';
import { nominationListState } from '../../atoms/atoms';
import { Button } from '@chakra-ui/react';
import React from 'react';

export default function Movie({
  movie,
  removableNominee,
  isNominatedAlready,
  isNominee,
}) {
  const [nominationList, setNominationList] = useRecoilState(
    nominationListState
  );

  const nominateMovie = () => {
    // Create movie object from movie data to push to list(array)
    const nominatedTheMovie = {
      Title: movie.Title,
      Year: movie.Year,
      imdbID: movie.imdbID,
    };

    // ? Must update array in state by copying and updating previous array not with .push
    setNominationList(oldList => [...oldList, nominatedTheMovie]);

    console.log('WOW OUR WINNERS!!', nominationList);
  };

  const removeNominatedMovie = () => {
    // Find index of movie to remove
    const indexOfNominatedMovieToRemove = nominationList.findIndex(
      nominatedMovie => {
        return nominatedMovie.imdbID === movie.imdbID;
      }
    );

    // Make copy of array, remove the proper movie then
    let copyOfArrayState = [...nominationList];

    copyOfArrayState.splice(indexOfNominatedMovieToRemove, 1);

    // ? Update array in state with updated copy
    // TODO
    // ! Might just use filter on array since this is small project/list and no worry of being slow
    setNominationList(copyOfArrayState);
  };

  return (
    <Box p="6" m="4" boxShadow="xl">
      <Heading size="lg">{movie.Title}</Heading>
      <Heading size="md">{movie.Year}</Heading>

      {isNominee ? <Button onClick={nominateMovie}>Nominate</Button> : ''}
      {isNominatedAlready ? <Button isDisabled>Nominate</Button> : ''}
      {removableNominee ? (
        <Button onClick={removeNominatedMovie}>Remove</Button>
      ) : (
        ''
      )}
    </Box>
  );
}
