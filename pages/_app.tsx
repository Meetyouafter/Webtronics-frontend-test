/* eslint-disable react/jsx-props-no-spreading */
import '../styles/globals.scss';
import '../styles/styles.scss';
import React from 'react';
import { Provider } from 'react-redux';
import { AppProps } from 'next/app';
import store from '../src/store/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
