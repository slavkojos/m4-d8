import {
  InputGroup,
  InputLeftElement,
  Input,
  IconButton,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
} from '@chakra-ui/react';
import { useState, useRef, useEffect } from 'react';
import { fetchSearchResults } from '../functions/functions';
import SearchResult from './SearchResult';
export default function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);
  const search = useRef();
  const open = () => {
    setIsOpen(true);
    console.log('popover opened');
  };
  const close = () => {
    console.log('Popover closed');
    setIsOpen(false);
  };
  const [searchResults, setSearchResults] = useState([]);
  async function getSearchResults(event) {
    console.log('new fetch');
    setSearchResults(await fetchSearchResults(event.target.value));
    searchResults !== [] ? open() : close();
    event.target.value === '' && close();
    console.log('isOpen', isOpen);
  }
  const displaySearchResults = () => {
    return (
      searchResults &&
      searchResults.map(res => {
        return (
          <SearchResult
            key={res.imdbID}
            id={res.imdbID}
            title={res.Title}
            image={res.Poster}
            close={close}
          />
        );
      })
    );
  };
  /* useEffect(async () => {
    setSearchResults(await fetchSearchResults(event.target.value));
  }, []); */
  console.log('searchresults', searchResults);
  return (
    <Popover
      returnFocusOnClose={true}
      isOpen={isOpen}
      //onClose={close}
      closeOnBlur={true}
      initialFocusRef={search}
    >
      <PopoverTrigger>
        <InputGroup>
          <Input
            ref={search}
            placeholder="Search..."
            onChange={event => {
              getSearchResults(event);
            }}
          />
        </InputGroup>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverBody>{displaySearchResults()}</PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
