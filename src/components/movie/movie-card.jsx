import React from 'react';
import { Flex, Box, Image, useToast, Button, Heading } from '@chakra-ui/react';
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

    // ? Must update array in state by copying and updating previous array not with .push
    setNominationList(oldList => [...oldList, nominatedTheMovie]);
    localStorage.setItem(
      'savedNominations',
      JSON.stringify([...nominationList, nominatedTheMovie])
    );

    // toast for user feedback on add
    return toast({
      position: 'top',
      duration: 2000,
      isClosable: true,

      render: () => (
        <Box
          color="white"
          p={5}
          bg="green.400"
          borderRadius="lg"
          textAlign="center"
        >
          <Heading size="md">Movie nominated!</Heading>
        </Box>
      ),
    });
  };

  const removeNominatedMovie = () => {
    const indexOfNominatedMovieToRemove = nominationList.findIndex(
      nominatedMovie => {
        return nominatedMovie.imdbID === movie.imdbID;
      }
    );

    // Make copy of array, remove the proper movie then
    let copyOfArrayState = [...nominationList];

    copyOfArrayState.splice(indexOfNominatedMovieToRemove, 1);

    // ? Update array in local and state with updated copy
    localStorage.setItem('savedNominations', JSON.stringify(copyOfArrayState));
    setNominationList(copyOfArrayState);

    return toast({
      position: 'top',
      duration: 2000,
      isClosable: true,

      render: () => (
        <Box color="white" p={5} bg="red.400" borderRadius="lg">
          <Heading size="md"> Movie was removed from nominees</Heading>
        </Box>
      ),
    });
  };

  return (
    <Flex p={10} w="full" alignItems="center" justifyContent="center">
      <Box
        minw="250px"
        minH="200px"
        maxW="300px"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
      >
        <Image
          src={movie.Poster}
          w="full"
          h="230px"
          alt={`Picture of ${movie.name}`}
          roundedTop="lg"
        />

        <Box p="3" h="180px">
          <Flex
            mt="1"
            // maxW="400px"
            h="full"
            direction="column"
            justifyContent="space-evenly"
            alignItems="center"
          >
            <Heading
              textAlign="center"
              fontSize="xl"
              fontWeight="semibold"
              lineHeight="tight"
            >
              {movie.Title}
            </Heading>
            <Heading fontSize="xl" fontWeight="semibold" lineHeight="tight">
              {`(${movie.Year})`}
            </Heading>

            {isNominee ? (
              <Button colorScheme="green" onClick={nominateMovie}>
                Nominate
              </Button>
            ) : (
              ''
            )}
            {isNominatedAlready ? (
              <Button isDisabled colorScheme="green">
                Nominate
              </Button>
            ) : (
              ''
            )}
            {removableNominee ? (
              <Button colorScheme="red" onClick={removeNominatedMovie}>
                Remove
              </Button>
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
