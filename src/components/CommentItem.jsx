import React from 'react';
import {
  chakra,
  Box,
  Image,
  Flex,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';

const Ma = props => {
  return (
    <Flex
      bg="gray.600"
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        w="md"
        mx="auto"
        py={4}
        px={8}
        bg={useColorModeValue('white', 'gray.800')}
        shadow="lg"
        rounded="lg"
      >
        <Flex justifyContent={{ base: 'center', md: 'end' }} mt={-16}>
          <Image
            w={20}
            h={20}
            fit="cover"
            rounded="full"
            borderStyle="solid"
            borderWidth={2}
            borderColor={useColorModeValue('brand.500', 'brand.400')}
            alt="Testimonial avatar"
            src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80"
          />
        </Flex>

        <chakra.h2
          color={useColorModeValue('gray.800', 'white')}
          fontSize={{ base: '2xl', md: '3xl' }}
          mt={{ base: 2, md: 0 }}
          fontWeight="bold"
        >
          {props.author}
        </chakra.h2>

        <chakra.p mt={2} color={useColorModeValue('gray.600', 'gray.200')}>
          {props.comment}
        </chakra.p>

        <Flex justifyContent="end" mt={4}>
          <Link
            href="#"
            fontSize="xl"
            color={useColorModeValue('brand.500', 'brand.300')}
          >
            {`Rating: ${props.rate}`}
          </Link>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Ma;
