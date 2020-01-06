import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Home from './Home';
import UserDetails from './components/UserDetails'



function App() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/user/:id" component={UserDetails} />
    </Switch>
  )
}

export default App;