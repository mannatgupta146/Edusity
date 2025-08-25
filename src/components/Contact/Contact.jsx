import React from 'react'
import './Contact.css'
import msgIcon from '../../assets/msg-icon.png'
import mailIcon from '../../assets/mail-icon.png'
import phoneIcon from '../../assets/phone-icon.png'
import locationIcon from '../../assets/location-icon.png'
import whiteArrow from '../../assets/white-arrow.png'
 
const Contact = () => {

const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "b547b13b-43e1-4bff-be93-aa586908dcc3");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

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
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input type="text" name="name" placeholder="Enter your name" required/>
          <label>Phone Number</label>
          <input type="tel" name="phone" placeholder="Enter your mobile number" required/>
          <label>Write your message here</label>
          <textarea name="message" rows="6" placeholder='Enter your text' required></textarea>
          <button type="submit" className='btn dark-btn'>Submit now <img src={whiteArrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
