import CommentItem from './CommentItem';
import React, { useState, useEffect } from 'react';
import {
  Text,
  Box,
  Flex,
  useColorModeValue,
  Image,
  HStack,
  Heading,
  Button,
  Center,
  useDisclosure,
} from '@chakra-ui/react';
import Modal from './Modal';
const auth =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDZhMzZhOGY2ZmUwNDAwMTU4MmQyOTkiLCJpYXQiOjE2MTc1NzM1NDQsImV4cCI6MTYxODc4MzE0NH0.NaqmP4EFQptwzVGl4FsjW6p8lj540Oy0t-QULrl3oxg';
const url = 'https://striveschool-api.herokuapp.com/api/comments/';

const Component = props => {
  //const { isOpen, onOpen, onClose } = useDisclosure();
  const [comments, updateComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchData = async () => {
    const response = await fetch(url + props.id, {
      headers: { Authorization: auth },
    });
    const data = await response.json();
    updateComments(data);
    setIsLoading(false);
    console.log(data);
  };
  useEffect(async () => {
    setIsLoading(true);
    fetchData();
  }, [props.id]);
  const arrowStyles = {
    cursor: 'pointer',
    pos: 'absolute',
    top: '50%',
    w: 'auto',
    mt: '-22px',
    p: '16px',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '18px',
    transition: '0.6s ease',
    borderRadius: '0 3px 3px 0',
    userSelect: 'none',
    _hover: {
      opacity: 0.8,
      bg: 'black',
    },
  };

  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesCount = comments.length;

  const prevSlide = () => {
    setCurrentSlide(s => (s === 0 ? slidesCount - 1 : s - 1));
  };
  const nextSlide = () => {
    setCurrentSlide(s => (s === slidesCount - 1 ? 0 : s + 1));
  };
  const setSlide = slide => {
    setCurrentSlide(slide);
  };
  const carouselStyle = {
    transition: 'all .5s',
    ml: `-${currentSlide * 100}%`,
  };
  return (
    <Flex direction="column" alignItems="center" justifyContent="center">
      {comments.length > 0 ? (
        <Flex w="full" p={10} alignItems="center" justifyContent="center">
          <Flex w="full" overflow="hidden" pos="relative">
            <Flex h="300px" w="full" {...carouselStyle}>
              {comments.map((comment, sid) => {
                return (
                  <Box
                    key={`slide-${sid}`}
                    boxSize="full"
                    shadow="md"
                    flex="none"
                  >
                    <CommentItem
                      key={comment._id}
                      comment={comment.comment}
                      author={comment.author}
                      rate={comment.rate}
                    />
                    {sid + 1} / {slidesCount}
                  </Box>
                );
              })}
            </Flex>
            <Text {...arrowStyles} left="0" onClick={prevSlide}>
              &#10094;
            </Text>
            <Text {...arrowStyles} right="0" onClick={nextSlide}>
              &#10095;
            </Text>
            <HStack justify="center" pos="absolute" bottom="8px" w="full">
              {Array.from({ length: slidesCount }).map((_, slide) => (
                <Box
                  key={`dots-${slide}`}
                  cursor="pointer"
                  boxSize={['7px', , '15px']}
                  m="0 2px"
                  bg={
                    currentSlide === slide ? 'blackAlpha.800' : 'blackAlpha.500'
                  }
                  rounded="50%"
                  display="inline-block"
                  transition="background-color 0.6s ease"
                  _hover={{ bg: 'blackAlpha.800' }}
                  onClick={() => setSlide(slide)}
                ></Box>
              ))}
            </HStack>
          </Flex>
        </Flex>
      ) : (
        <Flex w="full" p={10} alignItems="center" justifyContent="center">
          <Heading>No comments!</Heading>
        </Flex>
      )}
      <Modal id={props.id} url={url} auth={auth} fetch={fetchData} />
    </Flex>
  );
};
export default Component;
