import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import { Main } from './pages/Main';
import Prueba from './pages/Prueba';




function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/Main">  <Main /> </Route>
          <Router path="/Prueba"> <Prueba />  </Router>
          <Router path="/">  <Login /> </Router>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
