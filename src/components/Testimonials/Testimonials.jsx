import React, { useRef } from 'react';
import './Testimonials.css';
import nextIcon from '../../assets/next-icon.png';
import backIcon from '../../assets/back-icon.png';
import user1 from '../../assets/user-1.png';
import user2 from '../../assets/user-2.png';
import user3 from '../../assets/user-3.png';
import user4 from '../../assets/user-4.png';

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img src={backIcon} alt="" className="back-btn" onClick={slideBackward} />
      <img src={nextIcon} alt="" className="next-btn" onClick={slideForward} />

      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user1} alt="" />
                <div className="user-details">
                  <h3>Sophia Lee</h3>
                  <span>New York, USA</span>
                </div>
              </div>
              <p>
                Edusity provided me with the resources and guidance I needed to excel in my studies.
                The faculty is outstanding and always ready to help.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user2} alt="" />
                <div className="user-details">
                  <h3>Arjun Patel</h3>
                  <span>Mumbai, India</span>
                </div>
              </div>
              <p>
                I loved the interactive learning environment at Edusity.
                The courses are well-structured and the community is very welcoming.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user3} alt="" />
                <div className="user-details">
                  <h3>Maria Gomez</h3>
                  <span>Toronto, Canada</span>
                </div>
              </div>
              <p>
                Edusity helped me connect with peers from around the world.
                The platform is easy to use and the support team is fantastic.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user4} alt="" />
                <div className="user-details">
                  <h3>William Jackson</h3>
                  <span>Madrid, Spain</span>
                </div>
              </div>
              <p>
                My experience at Edusity has been incredible.
                The curriculum is up-to-date and the instructors are very knowledgeable.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
