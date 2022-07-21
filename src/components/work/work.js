/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/function-component-definition */
import React, { useState, useEffect } from 'react';
import Beige from '../../assets/images/backgrounds/beige-bg.png';
import ProjectList from './project_list';
import ProjectCard from './project_card';
import Filter from './filter';
import './work.scss';

const Work = () => {
  const [category, setCategory] = useState('all');
  const [projects, setProjects] = useState(ProjectList);

  useEffect(() => {
    if (category === 'all') {
      setProjects(ProjectList);
    } else {
      setProjects(ProjectList.filter((proj) => proj.category === category));
    }
  }, [category]);

  return (
    <div className="page">
      <img id="home-bg" src={Beige} alt={Beige} />
      <div className="general">
        <Filter filter={(tag) => setCategory(tag)} />
        <div className="project-container">
          {projects.map((project) => <ProjectCard proj={project} category={category} />)}
        </div>
      </div>
    </div>
  );
};

export default Work;
