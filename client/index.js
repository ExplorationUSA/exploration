import React from 'react';
import { render } from 'react-dom';

import { ChakraProvider } from '@chakra-ui/react';

import './assets/styles/app.scss';
import { HashRouter } from 'react-router-dom';
import App from './App';

render(<ChakraProvider><HashRouter><App /></HashRouter></ChakraProvider>, document.getElementById('root'));
