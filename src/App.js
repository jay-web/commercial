import React from 'react';
import {Switch, Route } from 'react-router-dom';

import HomePage from './pages/homePage.component';



function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage}  />
        <Route exact path="/shop/hats" component={Hats} />
      </Switch>
    </div>
  );
}

function Hats() {
  return (
    <div>
      <h1>Hats</h1>
      <h2>buy styling hats</h2>
    </div>
  );
}

export default App;
