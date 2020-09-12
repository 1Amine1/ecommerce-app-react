import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Checkout } from './components/Checkout/Checkout';
import './App.css';



function App() {
 
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />                 
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/contact-us" component={Checkout} />

      </Switch>
    </Router>
   
  );
}

export default App;
