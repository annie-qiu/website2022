/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/function-component-definition */
import React from 'react';
import Beige from '../../assets/images/backgrounds/beige-bg.png';

const About = () => {
  return (
    <div className="page">
      <img id="home-bg" src={Beige} alt={Beige} />
      <div className="general">
        <div className="page-title">Hi! <span>&#127793;</span></div>
      </div>
    </div>
  );
};

export default About;
