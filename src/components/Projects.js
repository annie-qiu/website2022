/* eslint-disable react/function-component-definition */
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ProjectItems from './ProjectItems';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

const Projects = () => {
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
        <a href={proj.link}>Try it out!</a>
      );
    }
    return null;
  };

  const projects = ProjectItems.map((project) => {
    return (
      <div className="project">
        <div className="project-img">
          {renderImage(project)}
        </div>
        <div className="project-text">
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <p>{project.tags}</p>
          {renderLink(project)}
        </div>
      </div>
    );
  });

  return (
    <div className="project-container">
      {projects}
    </div>
  );
};

export default Projects;
