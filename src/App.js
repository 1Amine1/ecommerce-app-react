import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { auth } from './firebase';
import { useStateValue } from './store/StateProvider';
import { login, logout } from './store/actions';


import { Login } from './components/Auth/Login';
import { Checkout } from './components/Checkout/Checkout';
import { Home } from './components/Home/Home';

import './App.css';



function App() {
  const [state, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {

      // console.log(authUser);

      if (authUser) {
        // user logged in
        dispatch(login(authUser));
      } else {
        // user is logged out
        dispatch(logout());
      }
    })

  }, [])
 
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />                 
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/contact-us" component={Checkout} />

      </Switch>
    </Router>
   
  );
}

export default App;
