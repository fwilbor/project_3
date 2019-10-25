import React from 'react';
import ReactDOM from 'react-dom';
import MathGame from './MathGame';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MathGame />, div);
  ReactDOM.unmountComponentAtNode(div);
});
