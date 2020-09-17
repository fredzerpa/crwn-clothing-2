import React, { Component, Fragment } from 'react';
import Homepage from './pages/homepage/Homepage';
import Shop from './pages/shop/Shop';
import Header from './components/header/Header';
import SignInUp from './pages/sign-in-up/SignInUp';
import { Route, Switch } from 'react-router-dom';
/* firebase */
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {

        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
        })

      } else {
        this.setState({ currentUser: null })
      }


    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.state;
    return (
      <Fragment>
        <Header currentUser={currentUser} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/shop' component={Shop} />
          <Route exact path='/signin' component={SignInUp} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
