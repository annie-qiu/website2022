/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/function-component-definition */
import React from 'react';
import Projects from './Projects';
import Filter from './Filter';

const Work = () => {
  return (
    <div>
      <h1 className="page-title">Work</h1>
      <Filter />
      <Projects />
    </div>
  );
};

export default Work;
