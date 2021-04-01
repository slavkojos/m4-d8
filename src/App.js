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
import Home from './components/Home';
import MovieDetail from './components/MovieDetail';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/movie/:movieID" component={MovieDetail} />
      </Router>
    </ChakraProvider>
  );
}

export default App;
