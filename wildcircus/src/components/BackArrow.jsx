import React from 'react';
import { Link } from 'react-router-dom'

import Arrow from '../img/arrow-back.png'
import '../App.css';

class BackArrow extends React.Component {
  render() {
    return (
      <div className="arrow-back">   
        <Link to="/"> 
          <figure className='figure-arrow-back'>
            <img className='img-arrow-back' src={Arrow} alt='Back arrow'/>
          </figure>
        </Link>
      </div>
    );
  }
}

export default BackArrow;