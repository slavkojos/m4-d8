import { Flex, Spacer, Image, Text, Box, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

export default function SearchResult(props) {
  return (
    <Box my={2}>
      <Link
        as={RouterLink}
        to={'/movie/' + props.id}
        onClick={() => {
          props.close();
          props.resetsearch();
          console.log('prop', props.id);
        }}
      >
        <Flex>
          <Image
            boxSize="100px"
            src={props.image}
            fallbackSrc="https://via.placeholder.com/150"
          />
          <Text ml={2} flex="1" fontSize="lg">
            {props.title}
          </Text>
        </Flex>
      </Link>
    </Box>
  );
}
