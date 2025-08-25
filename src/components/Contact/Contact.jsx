import React from 'react'
import './Contact.css'
import msgIcon from '../../assets/msg-icon.png'
import mailIcon from '../../assets/mail-icon.png'
import phoneIcon from '../../assets/phone-icon.png'
import locationIcon from '../../assets/location-icon.png'
 
const Contact = () => {
  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msgIcon} alt="" /></h3>
        <p>Feel free to reach out through contact form or find our contact information below. 
          Your feedback, questions and suggestions are important too us as we strive to 
          provide exceptional service to our edusity community</p>
          <ul>
            <li><img src={mailIcon} alt="" />contact@edusity.com</li>
            <li><img src={phoneIcon} alt="" />+1 123-456-7890</li>
            <li><img src={locationIcon} alt="" />77 Massachusetts Ave, Cambridgr <br /> MA 02139, United States</li>
          </ul>
      </div>
      <div className="contact-right"></div>
    </div>
  )
}

export default Contact
