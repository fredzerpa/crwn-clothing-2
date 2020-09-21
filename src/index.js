import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
/* react router */
import { BrowserRouter as Router } from 'react-router-dom';
/* redux */
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';

import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Router>
  </Provider>,
  document.getElementById('root')
);