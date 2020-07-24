import React from 'react';
import {Switch, Route } from 'react-router-dom';

import HomePage from './pages/homePage.component';



function App() {
  return (
    <div>
      <Switch>
      <Route exact path="/" component={HomePage}  />
      <Route exact path="/121" component={PageNotFound} />
      </Switch>
    </div>
  );
}

function PageNotFound() {
  return (
    <div>
      <h1>Page not found</h1>
      <h2>404</h2>
    </div>
  );
}

export default App;
