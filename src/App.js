import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Header from './components/Header';

import Routes from './routes';
import store from './store';

export default function App(){
  return(
    <Provider store={store}>
      <BrowserRouter>
        <Header/>
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}