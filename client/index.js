import React from 'react';
import { render } from 'react-dom';

import { ChakraProvider } from '@chakra-ui/react';

import './assets/styles/app.scss';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ProvideAuth } from './useAuth';

render(<ChakraProvider><BrowserRouter><ProvideAuth><App /></ProvideAuth></BrowserRouter></ChakraProvider>, document.getElementById('root'));
