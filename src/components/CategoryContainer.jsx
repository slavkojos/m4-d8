import { Box, Container, Flex, SimpleGrid } from '@chakra-ui/react';

const url = 'https://www.omdbapi.com/?apikey=2d031a4a&i=';

export default function CategoryContainer() {
  return (
    <SimpleGrid
      bg="black"
      w="100%"
      p={4}
      color="white"
      columns={[2, null, 3, 4]}
      spacing="30px"
    >
      <Box bg="tomato" height="200px"></Box>
      <Box bg="tomato" height="200px"></Box>
      <Box bg="tomato" height="200px"></Box>
      <Box bg="tomato" height="200px"></Box>
      <Box bg="tomato" height="200px"></Box>
    </SimpleGrid>
  );
}
