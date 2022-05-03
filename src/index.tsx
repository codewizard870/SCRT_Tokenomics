import React, {useEffect, useMemo} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import { store } from './app/store';

import { StoreProvider } from './store'

import * as serviceWorker from './serviceWorker';
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


ReactDOM.hydrate(
  <React.StrictMode>
    <StoreProvider>
      <ChakraProvider theme={theme}>
        <App />
        <ToastContainer/>
      </ChakraProvider>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

