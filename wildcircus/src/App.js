import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './compenents/Home';
import Artist from './compenents/Artist';
import Prices from './compenents/Prices';
import Reservation from './compenents/Reservation';
import Contact from './compenents/Contact';

import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/artist' component={Artist}/>
        <Route exact path='/prices' component={Prices}/>
        <Route exact path='/reservation' component={Reservation}/>
        <Route exact path='/contact' component={Contact}/>
      </Switch>
      </div>
  );
}

export default App;