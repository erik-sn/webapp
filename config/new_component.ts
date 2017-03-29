import * as fs from 'fs';

function generateFunctionalComponent(name: string): string {
  const componentName: string = name.split('_').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join('');
  const content: string =
`import * as React from 'react';

export interface I${componentName}Props {
}

const ${componentName} = ({}: I${componentName}Props) => (
  <div className="${name}__container" >
    <h3>Hello ${name}</h3>
  </div>
);

export default ${componentName};

`;
  return content;
}

function generateClassComponent(name: string): string {
  const componentName: string = name.split('_').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join('');
  const content: string =
`import * as React from 'react';

export interface I${componentName}Props {
}

export interface I${componentName}State {
}

class ${componentName} extends React.Component<I${componentName}Props, I${componentName}State> {

  constructor(props: I${componentName}Props) {
    super(props);
    this.state = {
    };
  }

  public render(): JSX.Element {
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


function generateReduxComponent(name: string): string {
  const componentName: string = name.split('_').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join('');
  const content: string =
`import * as React from 'react';
import { connect } from 'react-redux';

import { IReduxState } from '../constants/interfaces';

export interface I${componentName}Props {
}

export interface I${componentName}State {
}

class ${componentName} extends React.Component<I${componentName}Props, I${componentName}State> {

  constructor(props: I${componentName}Props) {
    super(props);
    this.state = {
    };
  }

  public render(): JSX.Element {
    return (
      <div className="${name}__container" >
        <h3>Hello ${name}</h3>
      </div>
    );
  }
}

function mapStateToProps(state: IReduxState): {} {
  return {
  };
}

const ${componentName}Container = connect<{}, {}, I${componentName}Props>(mapStateToProps,
  {})(${componentName});

export default ${componentName}Container;
`;
  return content;
}

function generateComponent(componentType: string, name: string): string {
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

const args: string[] = process.argv.slice(2);
if (args.length > 2 || args.length === 0) {
  throw Error(`Expecting at least a component name. Instead got: ${args}`);
}
const componentName: string = args[0].trim().toLowerCase();
const componentType: string = args[1] ? args[1].trim().toLowerCase() : '';

const dir: string = `src/components`;
const filePath = `${dir}/${componentName}.tsx`;
if (fs.existsSync(filePath)) {
  throw Error(`This component already exists at this path: ${filePath}`);
}

fs.writeFile(`${dir}/${componentName}.tsx`, generateComponent(componentType, componentName));
console.info(`Successfully created component: '${componentName}.tsx'`);