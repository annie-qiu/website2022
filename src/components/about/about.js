/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/function-component-definition */
import React from 'react';
import {
  Flex, HStack, Image,
} from '@chakra-ui/react';
import Beige from '../../assets/images/backgrounds/beige-bg.png';
import Me from '../../assets/images/profpic.png';
import Resume from '../../assets/resume/resume2.pdf';
import './about.scss';

const About = () => {
  return (
    <div className="page">
      <img id="home-bg" src={Beige} alt={Beige} />
      <div className="general">
        <div id="about">
          <div className="page-title">Hi! <span>&#127793;</span></div>
          <Flex gridGap={10} flexDir={['column', 'column', 'row']}>
            <Flex gridGap={4} flexDir="column" w={['100%', '100%', '65%']}>
              <p>
                I&apos;m Annie, a &apos;24 at Dartmouth College studying Computer Science and Studio Art.
              </p>
              <p>
                As a visual artist, designer, and computer science student, my passions lie in the intersection of design and technology.
                From painting to coding scripts and designing mobile applications, I love to use problem solving and visual analysis to create delightful, impactful, and humane creations.
              </p>
              <p>
                I&apos;m from Shanghai, China (my favorite place in the world) but have also lived in upstate NY, Singapore, and Hanover, NH, and I&apos;m currently studying abroad in Copenhagen.
                I&apos;m also a campus tour guide and a lover of second-hand fashion and fresh coconuts 🥥.
              </p>
              <div>
                <p className="section"> Experience</p>
                <ul className="list">
                  <li>Software Developer and Product Designer @ <a href="http://dali.dartmouth.edu/">DALI Lab</a></li>
                  <li>Teaching Asstant for Object-Oriented Programming and UI/UX Design</li>
                  <li>CS Research Assistant</li>
                  <li>Design Consultant @ Design Corps</li>
                  <li>UI/UX Designer @ Vitalize</li>
                </ul>
              </div>
            </Flex>
            <Flex flexDir="column" w={['100%', '100%', '45%']}>
              <Image objectFit="cover" src={Me} />
              <Flex flexDir="column" mt={4} alignItems="flex-end" gridGap={1}>
                <p>Email me! ☞ <a href="mailto:annierqiu@gmail.com"><span>annierqiu@gmail.com</span></a></p>
                <HStack>
                  <a href="https://www.linkedin.com/in/annierqiu/" className="icon">
                    <Flex flexDir="row" w="100%" alignItems="center" gridGap={2}>
                      <i className="lab la-linkedin-in" />
                      LinkedIn
                    </Flex>
                  </a>
                  <p>·</p>
                  <a href="https://github.com/annie-qiu" className="icon">
                    <Flex flexDir="row" w="100%" alignItems="center" gridGap={2}>
                      <i className="lab la-github" />
                      GitHub
                    </Flex>
                  </a>
                </HStack>
                <a href={Resume} target="_blank" rel="noopener noreferrer" className="icon">
                  <div className="button">Resume</div>
                </a>
              </Flex>
            </Flex>
          </Flex>
          <div>
            <br />
            <p className="section">Coursework</p>
            <em>* denotes a Citation of Academic Excellence</em>
            <ul className="list" style={{ columnCount: 2 }}>
              <p>Computer Science</p>
              <li>Intro to Computation and Programming*</li>
              <li>Object-Oriented Programming</li>
              <li>Discrete Math in CS</li>
              <li>Algorithms</li>
              <li>Full-Stack Web Development*</li>
              <li>Machine Learning & Statistical Analysis</li>
              <p>Design</p>
              <li>Design Thinking</li>
              <li>UI/UX Design</li>
              <p>Digital and Studio Art</p>
              <li>3D Digital Modeling*</li>
              <li>Drawing I*</li>
              <li>Painting I*</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
