/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/function-component-definition */
// import React, { useState } from 'react';
import React, { Component } from 'react';
import Projects from './Projects';
import Filter from './Filter';
import ProjectItems from './ProjectItems';
import './Work.scss';

class Work extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [],
    };
  }

  filterProjects = (tags) => {
    if (tags.length > 0) {
      const currentProjects = ProjectItems.filter((project) => tags.includes(project.category));
      this.setState({ projects: currentProjects });
    } else {
      this.setState({ projects: ProjectItems });
    }
  };

  render() {
    return (
      <div>
        <h1 className="page-title">Work</h1>
        <Filter filterProjects={this.filterProjects} />
        <Projects projects={this.state.projects} />
      </div>
    );
  }
}

export default Work;
