# React/Redux Boilerplate
[![Build Status](https://travis-ci.org/erik-sn/webapp.svg?branch=master)](https://travis-ci.org/erik-sn/webapp)
[![codecov](https://codecov.io/gh/erik-sn/webapp/branch/master/graph/badge.svg)](https://codecov.io/gh/erik-sn/webapp)


React/Redux boilerplate that includes the (optional) use of TypeScript

###Features
- [React.js](https://facebook.github.io/react/)
- [Redux](https://github.com/reactjs/redux)
- [TypeScript](https://www.typescriptlang.org/index.html)
- [Webpack](https://webpack.github.io/)
- [React Router](https://github.com/reactjs/react-router)
- [Hot Reloading](https://github.com/gaearon/react-hot-loader)
- [Isomorphic/Server Side Rendering](http://nerds.airbnb.com/isomorphic-javascript-future-web-apps/)
- [Mocha/Chai/Enzyme/Sinon/Istanbul Testing](https://mochajs.org/)
- [SASS](http://sass-lang.com/)
- [TSLint/TSLint-React](https://palantir.github.io/tslint/)


### NPM Scripts
- <b>dev</b>: start the development server which runs by default on port 3000 and has hot reloading
- <b>test</b>: Run all tests inside the __tests__ directory
- <b>tdd</b>: Run test in watch mode, after every save the tests are re-run (test driven design)
- <b>cover</b>: Run test and generate a coverage report indicating which code was executed while tests were ran. HTML report
is added to the `/app/coverage` directory
- <b>lint</b>: run tslint on the project to fix minor issues and alert more important ones
- <b>build</b>: run the webpack build configuration to compile TypeScript/ES6 into ES5 javascript in the /dist directory
- <b>start</b>: start the production server which hosts the minified/uglified versions of javascript/css files and supports
server side rendering with React Router & Redux. Designed for use in production, runs by default on port 4000.
