import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    useSystemColorMode: false,
    initialColorMode: 'dark',
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
  },
});

export default theme;
