import { useRef, useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
  Select,
  Form,
} from '@chakra-ui/react';

function CommentModal(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [commentInput, setCommentInput] = useState('');
  const [ratingInput, setRatingInput] = useState('');
  const [formStatus, setFormStatus] = useState(false);

  const handleSubmit = async event => {
    let myComment = {
      comment: commentInput,
      rate: ratingInput,
      elementId: props.id,
    };
    try {
      let response = await fetch(props.url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: props.auth,
        },
        body: JSON.stringify(myComment),
      });
      if (response.ok) {
        props.fetch();
        alert('ok');
      } else {
        console.log(response.body);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Button colorScheme="teal" size="lg" onClick={onOpen}>
        Leave a comment
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Leave a comment</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl isRequired>
              <FormLabel>Comment</FormLabel>
              <Input
                placeholder="Comment"
                onChange={event => setCommentInput(event.target.value)}
              />
            </FormControl>

            <FormControl mt={4} isRequired>
              <FormLabel>Rating</FormLabel>
              <Select
                placeholder="Rating"
                onChange={event => setRatingInput(event.target.value)}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </Select>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              type="submit"
              onClick={() => {
                handleSubmit();
                onClose();
              }}
              colorScheme="teal"
              mr={3}
            >
              Submit
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CommentModal;
