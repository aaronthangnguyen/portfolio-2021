import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    useSystemColorMode: false,
    initialColorMode: 'dark',
  },
  fonts: {
    heading: 'Ubuntu',
    body: 'Ubuntu',
  },
});

export default theme;
