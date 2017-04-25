# React/Redux Boilerplate

React/Redux boilerplate that includes the (optional) use of TypeScript

### Features

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
- <b>new</b>: generate a new React component in the `/src`/ directory. This takes one mandatory argument, the
component's name, and one optional component, `class` or `redux`. By default a function component is generated,
if `class` is passed then a `React.Component` class is generated, and if `redux` is passed a class with `mapStateToProps`
and `mapDispatchToProps` is generated with the `connect` function.

Example:

    npm run new NavbarContainer redux

- <b>dev</b>: start the development server which runs by default on port 3000 and has hot reloading
- <b>test</b>: Run all tests inside the `__tests__` directory
- <b>tdd</b>: Run tests in watch mode, after every save the tests are re-run (test driven design)
- <b>cover</b>: Run tests and generate a coverage report indicating which code was executed while tests were ran. HTML report
is added to the `/coverage` directory
- <b>lint</b>: run tslint on the src directory to fix any trivial formatting issues and raise issue with more serious ones
- <b>build</b>: run the webpack build configuration to compile TypeScript/ES6 into ES5 javascript in the /dist directory. Before
building linting and a coverage test are run.
- <b>start</b>: start the production server which hosts the minified/uglified versions of javascript/css files and supports
server side rendering with React Router & Redux. Designed for use in production, runs by default on port 4000.
