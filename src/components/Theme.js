import { extendTheme } from '@chakra-ui/react';

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  fonts: {
    heading: 'ivypresto-headline, serif',
    body: 'neue-haas-unica, sans-serif',
    button: 'neue-haas-unica, sans-serif',
  },
});

export default theme;
