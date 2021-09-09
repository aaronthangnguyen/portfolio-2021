import { Link, Icon, HStack, Flex, Box } from '@chakra-ui/react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

export const Nav = () => {
  return (
    <Flex marginTop="2rem" justify="space-between" align="flex-end">
      {/* Left */}
      <Box>
        <HStack spacing="1rem" display={['none', 'none', 'initial', 'initial']}>
          <Link fontSize="xl" textDecoration="none">
            Projects
          </Link>
          <Link fontSize="xl">Resume</Link>
          <Link fontSize="xl">Experience</Link>
        </HStack>
      </Box>

      {/* Right */}
      <HStack spacing="1rem">
        <Link
          href="mailto:me@aaronnguyen.dev"
          isExternal
          fontSize="2xl"
          _hover={{ color: 'yellow.200' }}
        >
          <Icon as={FaEnvelope} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/aaron-nguyen-672b46204"
          isExternal
          fontSize="2xl"
          _hover={{ color: 'yellow.200' }}
        >
          <Icon as={FaLinkedin} />
        </Link>
        <Link
          href="https://github.com/aaronthangnguyen"
          isExternal
          fontSize="2xl"
          _hover={{ color: 'yellow.200' }}
        >
          <Icon as={FaGithub} />
        </Link>
      </HStack>
    </Flex>
  );
};
