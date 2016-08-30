/**
 *  This line is necessary because we are using a SASS compiler through
 *  webpack on the client side. Because our JS/ES6 code is also loaded through 
 *  node in this server file, we will get syntax errors if the node server
 *  attemps to parse the css/scss files.
 * 
 *  To bypass this, we set this process.env variable as true when using webpack
 *  and delete it here. Then we only import/require the css/scss files in React 
 *  components if this variable exists (and is true). 
 * 
 *  This is unique to Isomorphic applications, see here: 
 *      http://stackoverflow.com/a/30355080/4396787
 *  
 */
delete process.env.BROWSER;

import path from 'path';
import express from 'express';
import logger from 'morgan';
import compression from 'compression';
import http from 'http';

import React from 'react';
import { RouterContext, match } from 'react-router';
import { renderToString } from 'react-dom/server';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import reducers from './src/reducers/';
import routes from './src/routes';


let server;

const app = express(); // delcare application
const PORT = process.env.PORT || 3000;

app.use(compression()); // compress compatible files for quicker client load time
app.use(logger('dev')); // log content

// Set path to public assets
app.use('/static', express.static('static'));
app.use('/static', express.static('dist'));

/**
 * For every request send the URL to React Router The router will return the content that should be 
 * delivered to the user. If the URL does not match any route, a 404 will be returned. 
 * 
 * React renders the component that should be returned in string format, and that string is served to the
 * client in an html form with static resources attached to it. After this page is loaded, any links o
 * routing that takes place will be handled purely by the javascript in react router.
 */
app.use('*', function(req, res) {
  match({ routes: routes, location: req.originalUrl }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {        
      const createStoreWithMiddleware = applyMiddleware()(createStore); 
      const html = renderToString(<Provider store={createStoreWithMiddleware(reducers)} ><RouterContext { ...renderProps } /></Provider>);
      res.status(200).send(renderFullPage(html));
    } else {
      res.status(404).send('Not found');
    }
  });
});

// create server based on application configuration
server = http.createServer(app);

// start the server listening on specified port
server.listen(PORT, () => {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening on port', PORT);
});

/**
 * Takes a react rendering in string format and returns a full html page.
 *
 * @param {string} html - react component to be rendered
 * @return {string} full html page
 */
function renderFullPage(html) {
  return `
    <!doctype html>
    <html>
      <head>
        <link rel="stylesheet" href="/static/bundle.min.css">
      </head>
      <body id="app-body">
        <div class="react-container">${html}</div>
      </body>
      <script src="/static/bundle.min.js"></script>
    </html>
  `;

}