/* eslint-disable react/function-component-definition */
import React from 'react';
import profpic from '../img/profpic.png';

const About = () => {
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
          <p><b>Listening to:</b></p>
          <h2>Experience</h2>
          <ul>
            <li>Product Designer @ DALI Lab</li>
            <li>Teaching Asstant for Object-Oriented Programming</li>
            <li>CS Research Assistant</li>
            <li>Design Consultant @ Design Corps</li>
            <li>UI/UX Designer @ Vitalize</li>
          </ul>
        </div>
        <div className="intro-img">
          <img src={profpic} alt="/" />
        </div>
      </div>
      <div className="coursework-container">
        <h2>Coursework</h2>
        <div className="coursework">
          <div className="cs">
            <h3>Computer Science</h3>
            <p>* denotes a Citation for Academic Excellence</p>
            <ul>
              <li>Intro to Programming and Computation (Python)*</li>
              <li>Object-Oriented Programming (Java)</li>
              <li>Discrete Math for CS</li>
              <li>Algorithms</li>
              <li>Machine Learning</li>
              <li>Functions of One and Several Variables</li>
            </ul>
          </div>
          <div className="art">
            <h3>Design, Digital Art, and Studio Art</h3>
            <ul>
              <li>Design Thinking</li>
              <li>Drawing 1*</li>
              <li>Painting 1*</li>
              <li>3D Digital Modeling*</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
