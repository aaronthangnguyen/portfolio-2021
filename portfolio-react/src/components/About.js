import {
  Stack,
  Flex,
  Heading,
  Text,
  Button,
  Center,
  Link,
} from '@chakra-ui/react';
import { FaProjectDiagram, FaPaperclip, FaFlask } from 'react-icons/fa';
import Resume from '../assets/20210909AaronResume.pdf';

export const About = () => {
  return (
    <Flex
      direction="column"
      align="center"
      marginTop={['2rem', '3rem', '5rem', '5rem']}
    >
      {/* Heading */}
      <Center align="stretch">
        <Heading
          as="h2"
          size="3xl"
          display={['none', 'none', 'initial', 'initial']}
        >
          Hello, I'm&nbsp;
        </Heading>
        <Heading as="h2" size="3xl">
          Aaron 🐝
        </Heading>
      </Center>

      {/* Subheading */}
      <Text
        fontSize="2xl"
        marginTop="0.5rem"
        marginRight={['initial', 'initial', '6rem', '6rem']}
        // display={['none', 'none', 'initial', 'initial']}
      >
        I build web applications
      </Text>
      <Text
        fontSize="2xl"
        marginLeft={['initial', 'initial', '6rem', '6rem']}
        marginTop="0rem"
        // display={['none', 'none', 'initial', 'initial']}
      >
        from front-end to back-end.
      </Text>
      <Stack
        marginTop="1rem"
        spacing="1rem"
        direction={['column', 'column', 'row', 'row']}
      >
        <Button
          as={Link}
          href="#"
          style={{ textDecoration: 'none' }}
          size="lg"
          leftIcon={<FaProjectDiagram />}
        >
          Projects
        </Button>
        <Button
          as={Link}
          href={Resume}
          style={{ textDecoration: 'none' }}
          size="lg"
          colorScheme="yellow"
          leftIcon={<FaPaperclip />}
          isExternal
        >
          Resume
        </Button>
        <Button
          as={Link}
          href="#"
          style={{ textDecoration: 'none' }}
          size="lg"
          leftIcon={<FaFlask />}
        >
          Experience
        </Button>
      </Stack>
    </Flex>
  );
};
