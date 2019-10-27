import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import Main from './components/main'
import { BrowserRouter, Switch } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<div />, div);
  ReactDOM.unmountComponentAtNode(div);
});
