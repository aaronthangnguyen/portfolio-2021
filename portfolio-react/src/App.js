import React from 'react';
import { About } from './components/About';

import '@fontsource/ubuntu';

import { ChakraProvider, Container } from '@chakra-ui/react';
import theme from './theme';
import { Nav } from './components/Nav';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW="container.lg">
        <Nav />
        <About />
      </Container>
    </ChakraProvider>
  );
}

export default App;

// transition="transform 250ms"
// _hover={{ transform: 'scale(1.01)' }}
