import React from 'react';

import ClicFluc from '../img/laugh.jpg'
import Aladdin from '../img/dream.jpg'
import Loyal from '../img/marvel.jpg'

import '../App.css';

class Artist extends React.Component {
  render() {
    return (
      <div className="artist">
        <p className='artist-title'>ARTIST</p>

        <div className='artist-card'>
          <figure className='figure-laugh'>
            <img className='img-laugh' src={ClicFluc} alt='Photo of Clic and Fluc'/>
          </figure>
          <ul> 
            <li>Name : Clic & Fluc</li>
            <li>Age : 5 & 9 </li>
            <li>Speciality : Cream pie in face</li>
          </ul>
        </div>

        <div className='artist-card'>
          <figure className='figure-dream'>
            <img className='img-dream' src={Aladdin} alt='Photo of Aladdin'/>
          </figure>
          <ul> 
            <li>Name : Aladdin</li>
            <li>Age : 25</li>
            <li>Speciality : Acrobatics</li>
          </ul>
        </div>

        <div className='artist-card'>
          <figure className='figure-marvel'>
            <img className='img-marvel' src={Loyal} alt='Photo of Mr Loyal and his Lions'/>
          </figure>
          <ul> 
            <li>Name : Mr Loyal & his Lions</li>
            <li>Age : 49</li>
            <li>Speciality : Don't get devoured</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Artist;