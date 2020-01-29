import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './components/Home';
import Artist from './components/Artist';
import Prices from './components/Prices';
import Reservation from './components/Reservation';
import Contact from './components/Contact';

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