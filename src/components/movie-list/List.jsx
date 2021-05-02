import React from 'react';
import { Box } from "@chakra-ui/react"

const List = props => {
  console.log(props);
  const { movies } = props;
  console.log('*****', movies);

  if (!movies || movies.length === 0) return <p>Search for some movies!</p>;

  return (
    <ul>
      <h2>Movies</h2>
      {movies.map(movie => {
        return (

          <Box boxShadow="xl" p="6"m="4">
            <li key={movie.imdbID} className="list">
              <span>{movie.Title}</span>
              <span>{movie.Year}</span>
            </li>
          </Box>
       
       );
      })}
    </ul>
  );
};
export default List;
