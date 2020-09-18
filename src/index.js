import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
/* react router */
import { BrowserRouter as Router } from 'react-router-dom';
/* redux */
import { Provider } from 'react-redux';
import store from './redux/store';

import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);