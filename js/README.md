React/Redux boilerplate with ES6 JavaScript

### Features

- [React.js](https://facebook.github.io/react/)
- [Redux](https://github.com/reactjs/redux)
- [Webpack](https://webpack.github.io/)
- [React Router](https://github.com/reactjs/react-router)
- [Hot Reloading](https://github.com/gaearon/react-hot-loader)
- [Isomorphic/Server Side Rendering](http://nerds.airbnb.com/isomorphic-javascript-future-web-apps/)
- [Jest/Chai/Enzyme/Sinon](https://mochajs.org/)
- [SCSS](http://sass-lang.com/)
- [Eslint](https://http://eslint.org/)


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
- <b>cover</b>: Run test and generate a coverage report indicating which code was executed while tests were ran. HTML report
is added to the `/coverage` directory
- <b>lint</b>: run eslint on the src directory to fix any trivial formatting issues and raise issue for more serious ones
- <b>compile</b>: compiles the entire project from ES6 to ES5 in this /dist directory. Keeps the project structure intact. This allows for server side rendering to be run with node.
- <b>build</b>: run the webpack build configuration to compile into production ready (minified, obfuscated, etc.) ES5 javascript with a `.min` extension. This is the file the browser will use. These files will be placed in either the Django static files if SERVER=DJANGO in the .env file, or in the /dist folder if SERVER=NODE.
- <b>start</b>: start the production server which hosts the minified/uglified versions of javascript/css files and supports
server side rendering with React Router & Redux. Designed for use in production, runs by default on port 4000. The `prestart` script compiles the server into ES5 so it can be run with normal node.
