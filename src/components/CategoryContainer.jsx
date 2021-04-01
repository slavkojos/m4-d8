import { Box, Container, Flex, SimpleGrid, Heading } from '@chakra-ui/react';

import { fetchSearchResults } from '../functions/functions.js';

import { useState, useEffect } from 'react';
import MovieItem from './MovieItem';

export default function CategoryContainer(props) {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(async () => {
    setSearchResults(await fetchSearchResults(props.title.toLowerCase()));
  }, []);
  return (
    <Box bg="black" p={3}>
      <Heading size="lg" color="white">
        {props.title}
      </Heading>
      <SimpleGrid
        w="100%"
        p={4}
        color="white"
        columns={[2, 3, 4, 6]}
        spacing="30px"
      >
        {searchResults.map(res => {
          return (
            <MovieItem
              key={res.imdbID}
              id={res.imdbID}
              title={res.Title}
              poster={res.Poster}
            />
          );
        })}
      </SimpleGrid>
    </Box>
  );
}
