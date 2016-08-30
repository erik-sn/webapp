import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Hello } from "./components/hello.tsx";

ReactDOM.render(<div><h1>Test4</h1><Hello user="test4" /></div>, 
document.getElementById('react-container'));
