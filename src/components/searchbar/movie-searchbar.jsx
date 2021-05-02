import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { movieListState } from '../../atoms/atoms';

import { Box, Heading } from '@chakra-ui/react';
import { Input, Button } from '@chakra-ui/react';

const MovieSearchBar = () => {
  //* May opt to not use Recoil but for now it works fine
  const [movieList, setMovieList] = useRecoilState(movieListState);

  //   ? Use simpler state if not using loading overlay
  //   const [searchTitle, setSearchTitle] = useState('')

  const [searchState, setSearchState] = useState({
    searchTitle: '',
    loading: false,
  });

  const handleInputChange = e => {
    setSearchState({ searchTitle: e.target.value });
  };

  //*   Button Way
  const fetchMovieData = async () => {
    try {
      // API call picky about spaces so trim querey
      await fetch(
        `http://www.omdbapi.com/?s=${searchState.searchTitle.trim()}&type=movie&apikey=3efca87a`
      )
        .then(res => res.json())
        .then(movies => {
          console.log('THE MOVIES', movies.Search);
          setMovieList(movies.Search);
          console.log('RECOIL SAVED: ', movieList);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box>
      <Heading>Movie Title</Heading>
      <Input
        type="text"
        placeholder="Search Movies"
        value={searchState.searchTitle || ''}
        onChange={handleInputChange}
      />
      <Button onClick={fetchMovieData}>Search</Button>
    </Box>
  );
};

export default MovieSearchBar;

// ?   Filter as user types way to search movies
//   useEffect(() => {
//     let apiUrl = `http://www.omdbapi.com/?s=${searchState.searchTitle}&apikey=3efca87a`;

//     const fetchMovieData = async () => {
//       try {
//         await fetch(apiUrl)
//           .then(res => res.json())
//           .then(movies => {
//             console.log('====================', searchState.searchTitle.length);
//             console.log(movies);
//             // setSearchState({ ...searchState, movies: movies.Search });
//             setMovieList(movies.Search);
//             // console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&',movieList)
//           });
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     if (searchState.searchTitle.length > 0) {
//       fetchMovieData();
//     }
//   }, [searchState.searchTitle]);
