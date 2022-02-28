import React from 'react';
import { render } from 'react-dom';
import App from './App';

import '../public/styles/index.css';

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
