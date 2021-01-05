import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import { Main } from './pages/Main';


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/Main">  <Main /> </Route>
          <Router path="/">  <Login /> </Router>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
