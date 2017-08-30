/* eslint-disable no-console */
import fs from 'fs';

function generateFunctionalComponent(name) {
  const componentName = name.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
  const content =
`import React from 'react';

const ${componentName} = () => (
  <div className="${name}__container" >
    <h3>Hello ${name}</h3>
  </div>
);

export default ${componentName};

`;
  return content;
}

function generateClassComponent(name) {
  const componentName = name.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
  const content =
`import React, { Component } from 'react';

class ${componentName} extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="${name}__container" >
        <h3>Hello ${name}</h3>
      </div>
    );
  }
}

export default ${componentName};
`;
  return content;
}


function generateReduxComponent(name) {
  const componentName = name.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
  const content =
`import React, { Component } from 'react';
import { connect } from 'react-redux';

class ${componentName} extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="${name}__container" >
        <h3>Hello ${name}</h3>
      </div>
    );
  }
}

function mapStateToProps(state): {} {
  return {
  };
}

const ${componentName}Container = connect(mapStateToProps)(${componentName});

export default ${componentName}Container;
`;
  return content;
}

function generateComponent(componentType, name) {
  switch (componentType) {
    case 'class':
      return generateClassComponent(name);
    case 'redux':
      return generateReduxComponent(name);
    default:
      return generateFunctionalComponent(name);
  }
}

// parsing and validation

const args = process.argv.slice(2);
if (args.length > 2 || args.length === 0) {
  throw Error(`Expecting at least a component name. Instead got: ${args}`);
}
const componentName = args[0].trim().toLowerCase();
const componentType = args[1] ? args[1].trim().toLowerCase() : '';

const dir = 'src/components';
const filePath = `${dir}/${componentName}.js`;
if (fs.existsSync(filePath)) {
  throw Error(`This component already exists at this path: ${filePath}`);
}

fs.writeFile(`${dir}/${componentName}.js`, generateComponent(componentType, componentName));
console.info(`Successfully created component: '${componentName}.js'`);
