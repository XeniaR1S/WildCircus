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
          <Link to="/artist"/>
          <Link to="/prices"/>
          <Link to="/reservation"/>
          <Link to="/contact"/>
      </div>
    );
  }
}

export default Home;