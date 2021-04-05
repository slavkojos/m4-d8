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
import CommentsBox from './CommentsBox';

export default function MovieDetail(props) {
  const [movieData, setMovieData] = useState([]);
  useEffect(async () => {
    window.scrollTo(0, 0);
    setMovieData(await fetchFromID(props.match.params.movieID));
  }, [props.match.params.movieID]);
  return (
    <Box mx="auto" w={'50%'} my={5}>
      <Flex my={5}>
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
            {movieData.Released && `Release date: ${movieData.Released}`}
          </Text>
          <Text my={3} fontWeight="600">
            {movieData.Runtime && `Duration: ${movieData.Runtime}`}
          </Text>
          {movieData.Ratings &&
            movieData.Ratings.map((res, index) => {
              return (
                <Text key={index} my={3} fontWeight="600">
                  {`${res.Source}: ${res.Value}`}
                </Text>
              );
            })}
        </Box>
      </Flex>
      <CommentsBox id={props.match.params.movieID} />
    </Box>
  );
}
