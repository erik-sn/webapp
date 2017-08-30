import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'; // eslint-disable-line import/no-extraneous-dependencies

import App from './app';

const rootEl = document.getElementById('app-container');
ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  rootEl,
);

// react hot module reloading
if (module.hot) {
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default; // eslint-disable-line global-require
    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      rootEl,
    );
  });
}
