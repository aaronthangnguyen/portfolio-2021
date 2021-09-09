import { ButtonGroup, Flex, Heading, Text, Button } from '@chakra-ui/react';
import { ViewIcon, AttachmentIcon, AtSignIcon } from '@chakra-ui/icons';

export const About = () => {
  return (
    <Flex direction="column" align="center" marginTop="5rem">
      <Heading as="h2" size="3xl" marginLeft="2rem">
        Hello, I'm Aaron 🐝
      </Heading>
      <Text fontSize="2xl" marginRight="6rem" marginTop="0.5rem">
        I build web applications
      </Text>
      <Text fontSize="2xl" marginLeft="6rem" marginTop="0rem">
        from front-end to back-end.
      </Text>
      <ButtonGroup marginTop="1rem" spacing="1rem">
        <Button size="lg" leftIcon={<ViewIcon />}>
          Projects
        </Button>
        <Button size="lg" colorScheme="yellow" leftIcon={<AttachmentIcon />}>
          Resume
        </Button>
        <Button size="lg" leftIcon={<AtSignIcon />}>
          Experience
        </Button>
      </ButtonGroup>
    </Flex>
  );
};
