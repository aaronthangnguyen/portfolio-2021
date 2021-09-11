import React from 'react';
import '@fontsource/ubuntu';
import { ChakraProvider, Container, Grid, GridItem } from '@chakra-ui/react';
import theme from './theme';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW="container.lg">
        <Grid
          height="100vh"
          templateRows="min-content min-content auto min-content"
          templateColumns="repeat(2, 1fr)"
          gap="2rem 2rem"
        >
          <GridItem colSpan={2}>
            <Nav />
          </GridItem>
          <GridItem colSpan={2}>
            <Hero />
          </GridItem>
          <GridItem colSpan={[2, 2, 1, 1]}>
            <Projects />
          </GridItem>
          <GridItem colSpan={[2, 2, 1, 1]}>
            <Experience />
          </GridItem>
          <GridItem colSpan={2}>
            <Footer />
          </GridItem>
        </Grid>
      </Container>
    </ChakraProvider>
  );
}

export default App;

// transition="transform 250ms"
// _hover={{ transform: 'scale(1.01)' }}
