import React, {useEffect} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectCurrentUser} from './redux/user/user.selector'
import './App.css';
import {auth, createUserProfileDocument} from './firebase/firebase.utils'
import { setCurrentUser } from './redux/user/user.actions'

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import CheckoutPage from './pages/checkout/checkout.component'

function App({setCurrentUser, currentUser}) {


  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
        if(userAuth){
          const userRef = createUserProfileDocument(userAuth)

          ;(await userRef).onSnapshot(snapShot => {
            setCurrentUser({
              currentUser : {
                id : snapShot.id,
                ...snapShot.data()
              }
            })
          })
        }else{
          setCurrentUser(null)
        }
      })
    return () => {
      unsubscribeFromAuth(snapShot => {

      })
    }

  }, [setCurrentUser])

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route path="/shop" component={ShopPage} />

        <Route exact path="/signIn">
          {
          currentUser ? <Redirect to="/" /> :
            <SignInAndSignUpPage />
          }
        </Route>

        <Route exact path='/checkout'>
          <CheckoutPage />
        </Route>

      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser : selectCurrentUser
})


const mapDispatchToProps = dispatch => ({
  setCurrentUser : user => dispatch(
    setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
