/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/function-component-definition */
import React from 'react';
import Beige from '../../assets/images/backgrounds/beige-bg.png';
import ProjectList from './project_list';
import ProjectCard from './project_card';
import './work.scss';

const Work = () => {
  return (
    <div className="page">
      <img id="home-bg" src={Beige} alt={Beige} />
      <div className="general">
        {/* <div className="page-title">Work</div> */}
        <div className="project-container">
          {ProjectList.map((project) => <ProjectCard proj={project} />)}
        </div>
      </div>
    </div>
  );
};

export default Work;
