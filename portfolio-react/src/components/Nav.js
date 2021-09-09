import { HStack, Link } from '@chakra-ui/layout';

export const Nav = () => {
  return (
    <HStack justify="end" spacing="2rem" marginTop="2rem">
      <Link fontSize="xl">Projects</Link>
      <Link fontSize="xl">Resume</Link>
      <Link fontSize="xl">Experience</Link>
      <Link fontSize="xl">Contact</Link>
    </HStack>
  );
};
