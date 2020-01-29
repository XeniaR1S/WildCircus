import React from 'react';
import { Link } from 'react-router-dom'

import Logo from '../img/logo.png'
import '../App.css';

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <figure className='figure-logo'>
          <img className='img-logo' src={Logo} alt='Logo Wild Circus'/>
        </figure>
          <Link to="/artist">Our artist</Link>
          <Link to="/prices">Prices</Link>
          <Link to="/reservation">Reservations</Link>
          <Link to="/contact">Contact</Link>
      </div>
    );
  }
}

export default Home;