import { Center, Divider, Heading, Text } from '@chakra-ui/react';

export const Footer = () => {
  return (
    <Center marginBottom="1rem" flexDirection="column" textAlign="center">
      <Divider />
      <Heading as={Text} marginTop="0.5rem" size="md">
        Made with ❤️ by Aaron Nguyen
      </Heading>
      <Heading as={Text} size="sm">
        Powered by React, Chakra UI, and GitHub Pages
      </Heading>
    </Center>
  );
};
