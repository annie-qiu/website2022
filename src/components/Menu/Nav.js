/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/function-component-definition */
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.scss';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/work">Work</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
      </ul>
    </nav>
  );
};

export default Nav;
