import { fetchFromID } from '../functions/functions.js';
import { useState, useEffect } from 'react';
import React from 'react';
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  Link,
  Image,
  Center,
  Heading,
  Text,
} from '@chakra-ui/react';

export default function MovieDetail(props) {
  const [movieData, setMovieData] = useState([]);
  useEffect(async () => {
    window.scrollTo(0, 0);
    setMovieData(await fetchFromID(props.match.params.movieID));
  }, []);
  return (
    <Box mx="auto" w={'50%'} my={5}>
      <Flex>
        <Image src={movieData.Poster} />
        <Box p={4} ml={5}>
          <Heading>{movieData.Title}</Heading>
          <Text noOfLines={3} fontSize="xl" my={3}>
            {movieData.Plot}
          </Text>
          <Text my={3} as="i">
            {movieData.Actors}
          </Text>
          <Text my={3} fontWeight="600">
            {`Release date: ${movieData.Released}`}
          </Text>
          <Text my={3} fontWeight="600">
            {`Duration: ${movieData.Runtime}`}
          </Text>
          {console.log(movieData.Ratings)}
          {movieData.Ratings !== undefined &&
            movieData.Ratings.map(res => {
              return (
                <Text my={3} fontWeight="600">
                  {`${res.Source}: ${res.Value}`}
                </Text>
              );
            })}
        </Box>
      </Flex>
    </Box>
  );
}
