import React, { Component, Fragment } from 'react';
import Homepage from './pages/homepage/Homepage';
import Shop from './pages/shop/Shop';
import Header from './components/header/Header';
import SignInUp from './pages/sign-in-up/SignInUp';
import { Route, Switch, Redirect } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
/* redux */
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

import './App.css';


class App extends Component {

  unsubscribeFromAuth = null;

  componentDidMount() {

    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {

        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {

          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          })

        })

      } else {
        setCurrentUser(userAuth)
      }


    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {

    const { currentUser } = this.props;

    return (
      <Fragment>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/shop' component={Shop} />
          <Route exact path='/signin' render={() =>
            currentUser ?
              (<Redirect to='/' />) :
              (<SignInUp />)
          }
          />
        </Switch>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ user: { currentUser } }) => ({
  currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
