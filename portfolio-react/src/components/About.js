import { Stack, Flex, Heading, Text, Button, Center } from '@chakra-ui/react';
import { FaProjectDiagram, FaPaperclip, FaFlask } from 'react-icons/fa';

export const About = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      marginTop={['3rem', '3rem', '5rem', '5rem']}
    >
      {/* Heading */}
      <Center paddingLeft="1rem">
        <Heading
          as="h2"
          size="3xl"
          visibility={['collapse', 'collapse', 'visible', 'visible']}
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
        marginRight="6rem"
        marginTop="0.5rem"
        visibility={['collapse', 'collapse', 'visible', 'visible']}
      >
        I build web applications
      </Text>
      <Text
        fontSize="2xl"
        marginLeft="6rem"
        marginTop="0rem"
        visibility={['collapse', 'collapse', 'visible', 'visible']}
      >
        from front-end to back-end.
      </Text>
      <Stack
        marginTop="1rem"
        spacing="1rem"
        direction={['column', 'column', 'row', 'row']}
      >
        <Button size="lg" leftIcon={<FaProjectDiagram />}>
          Projects
        </Button>
        <Button size="lg" colorScheme="yellow" leftIcon={<FaPaperclip />}>
          Resume
        </Button>
        <Button size="lg" leftIcon={<FaFlask />}>
          Experience
        </Button>
      </Stack>
    </Flex>
  );
};
