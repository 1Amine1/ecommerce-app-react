import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { ToastContainer } from 'react-toastify';

import { auth } from './firebase';
import { useStateValue } from './store/StateProvider';
import { login, logout } from './store/actions';

import { Header } from './components/Header/Header';
import { Login } from './components/Auth/Login';
import { Checkout } from './components/Checkout/Checkout';
import { Home } from './components/Home/Home';
import { Payment } from './components/Payment/Payment';
import { ProductDetail } from './components/ProductDetail/ProductDetail';


import { stripe_key } from './stripe'

import './App.css';
import { Footer } from './components/Footer/Footer';
import { Orders } from './components/Orders/Orders';

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
        <Route exact path="/products/:id" component={ProductDetail} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/contact-us" component={Checkout} />
        <Route exact path="/orders" component={Orders} />
        <Route exact path="/payment">
          <Header />
          <Elements stripe={stripe_key}>
            <Payment />
          </Elements>
        </Route>
      </Switch>
      <ToastContainer autoClose={3000} />
      <Footer />
    </Router>
  );
}

export default App;
