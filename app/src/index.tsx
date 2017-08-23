import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './app';

const rootEl = document.getElementById('app-container');
ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  rootEl,
);

// react hot module reloading
declare const module: any; // silence TS error on module
if (module.hot) {
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default;
    ReactDOM.render(
      <AppContainer>
         <NextApp />
      </AppContainer>,
      rootEl,
    );
  });
}
