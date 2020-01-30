import React from 'react';
import '../App.css';

class Contact extends React.Component {
  render() {
    return (
      <div className='content-contact'>
        CONTACT
        <div className="contact">
          <div className='contact-school'>
            <ul>
              <li>Wild Code School</li>
              <li>6 rue de Saint Brice</li>
              <li>51100 - Reims</li>
              <li><a target="_blank" href='https://www.wildcodeschool.com/fr-FR'> Site Web  </a></li>
              
              <li>Campus manager : Clément Béchetoille</li>
              <li>clement@wildcodeschool.fr</li> 
              <li>06.58.30.24.94</li>
            </ul>
          </div>
          <div className='contact-author'>
            <ul>  
            <li>Xénia LECOMTE PRUD'HOMME</li>
            <li>E-mail : lecomtep.x@gmail.com</li>
            <li><a target="_blank" href='https://github.com/XeniaR1S'>GitHub</a></li>
            <li><a target="_blank" href='https://www.linkedin.com/in/x%C3%A9nia-lecomte-704baa18b/'>LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;