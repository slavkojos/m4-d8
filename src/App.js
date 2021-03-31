import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Nav from './components/Nav';
import CategoryContainer from './components/CategoryContainer';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Nav />
        <CategoryContainer />
      </Router>
    </ChakraProvider>
  );
}

export default App;
