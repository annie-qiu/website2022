/* eslint-disable react/function-component-definition */
import './style.scss';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './components/Theme';

import App from './components/App';

const root = createRoot(document.getElementById('main'));
root.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>,
);
