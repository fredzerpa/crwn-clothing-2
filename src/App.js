import React, { Fragment } from 'react';
import Homepage from './pages/homepage/Homepage';
import Shop from './pages/shop/Shop';
import Header from './components/header/Header';
import SignInUp from './pages/sign-in-up/SignInUp';
import { Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={Shop} />
        <Route exact path='/signin' component={SignInUp} />
      </Switch>
    </Fragment>
  );
}

export default App;
