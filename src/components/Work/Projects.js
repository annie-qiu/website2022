/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/function-component-definition */
// import React, { useState } from 'react';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Work.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

const Projects = (props) => {
  const renderImage = (proj) => {
    if (proj.carousel) {
      const carousel = proj.carousel.map((img) => {
        return (
          <Carousel.Item>
            <img className="d-block w-100" src={img} alt={img} />
          </Carousel.Item>
        );
      });
      return <Carousel> {carousel} </Carousel>;
    }
    return <img src={proj.img} alt={proj.img} />;
  };

  const renderLink = (proj) => {
    if (proj.link) {
      return (
        <a href={proj.link}><i className="las la-external-link-alt" /></a>
      );
    }
    return null;
  };

  const renderGithub = (proj) => {
    if (proj.github) {
      return (
        <a href={proj.github}><i className="lab la-github" /></a>
      );
    }
    return null;
  };

  const { projects } = props;
  const currentProjects = projects.map((project) => {
    return (
      <div className="project">
        <div className="project-img">
          {renderImage(project)}
        </div>
        <div className="project-text">
          <h2>{project.title}</h2>
          <p className="description">{project.description}</p>
          <p className="tags">{project.tags}</p>
          {renderLink(project)} {renderGithub(project)}
        </div>
      </div>
    );
  });
  return (
    <div className="project-container">
      {currentProjects}
    </div>
  );
};

export default Projects;
