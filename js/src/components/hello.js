import React from 'react';

const Hello = props => (
  <div className="hello-container">
    Hello from {props.match.params.name}!
  </div>
);

export default Hello;
