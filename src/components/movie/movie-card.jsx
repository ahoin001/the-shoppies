import React from 'react';
import {
  Flex,
  Box,
  Image,
  useToast,
  Button,
  useColorModeValue,
  Heading,
} from '@chakra-ui/react';
import { useRecoilState } from 'recoil';
import { nominationListState } from '../../atoms/atoms';

const MovieCard = ({
  movie,
  removableNominee,
  isNominatedAlready,
  isNominee,
}) => {
  const [nominationList, setNominationList] = useRecoilState(
    nominationListState
  );

  const toast = useToast();

  const nominateMovie = () => {
    // Create movie object from movie data to push to list(array)
    const nominatedTheMovie = {
      Title: movie.Title,
      Year: movie.Year,
      imdbID: movie.imdbID,
      Poster: movie.Poster,
    };

    // Display banner once user has 5 nominations
    if (nominationList.length > 4) {
      return toast({
        position: 'top',

        render: () => (
          <Box color="white" p={5} bg="yellow.400" borderRadius="lg">
            You can only nominate 5 movies, remove a movie from nominations list
            to add a different movie
          </Box>
        ),
      });
    }

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
    <Flex p={10} w="full" alignItems="center" justifyContent="center">
      <Box
        bg={useColorModeValue('white', 'gray.800')}
        minW="300px"
        minH="200px"
        // maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
      >
        <Image
          src={movie.Poster}
          w="full"
          h="280px"
          alt={`Picture of ${movie.name}`}
          roundedTop="lg"
        />

        <Box p="6">
          <Flex
            mt="1"
            h="120px"
            direction="column"
            justifyContent="space-evenly"
            alignItems="center"
          >
            <Heading
              fontSize="2xl"
              fontWeight="semibold"
              lineHeight="tight"
              isTruncated
            >
              {movie.Title}
            </Heading>
            <Heading
              fontSize="2xl"
              fontWeight="semibold"
              lineHeight="tight"
              isTruncated
            >
              {`(${movie.Year})`}
            </Heading>
            
            {isNominee ? <Button onClick={nominateMovie}>Nominate</Button> : ''}
            {isNominatedAlready ? <Button isDisabled>Nominate</Button> : ''}
            {removableNominee ? (
              <Button onClick={removeNominatedMovie}>Remove</Button>
            ) : (
              ''
            )}
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

export default MovieCard;
