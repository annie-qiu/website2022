/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/function-component-definition */
import React from 'react';
import profpic from '../../img/profpic.png';
import './About.scss';

const Aboutold = () => {
  return (
    <div className="about">
      <h1 className="page-title">Hi! <span>&#127793;</span></h1>
      <div className="intro">
        <div className="intro-text">
          <p>
            I&apos;m Annie, a ‘24 at Dartmouth College studying Computer Science with a minor in Studio Art.
            As a visual artist, designer, and computer science student, my passions lie in the intersection of design and technology.
            From painting to coding scripts and designing mobile applications, I love to use problem solving and visual analysis to create delightful, impactful, and humane creations.
          </p>
          <p>
            I&apos;m from Shanghai, China (my favorite place in the world) but have also lived in upstate NY, Singapore, and Hanover, NH.
          </p>
          <h2>Currently</h2>
          <p><b>Reading: </b><i>Beautiful World, Where Are You</i> by Sally Rooney</p>
          <h2>Experience</h2>
          <ul>
            <li>Product Designer @ DALI Lab</li>
            <li>Teaching Asstant for Object-Oriented Programming</li>
            <li>CS Research Assistant</li>
            <li>Design Consultant @ Design Corps</li>
            <li>UI/UX Designer @ Vitalize</li>
          </ul>
          <div className="links">
            <a href="https://www.linkedin.com/in/annierqiu/"><i className="lab la-linkedin-in" /></a>
            <a href="https://github.com/annie-qiu/"><i className="lab la-github" /></a>
            <a href="https://www.instagram.com/anniesartdiary/"><i className="lab la-instagram" /></a>
          </div>
        </div>
        <div className="intro-img">
          <img src={profpic} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default Aboutold;
