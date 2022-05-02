/* eslint-disable react/function-component-definition */
import React from 'react';
import { NavLink } from 'react-router-dom';
import star from '../img/menu-star.svg';

const MenuOverlay = (props) => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/" onClick={props.changeColor('#EBF4E6')}>Home</NavLink></li>
        <li><NavLink to="/work" onClick={props.changeColor('#F9F9F9')}>Work</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
      </ul>
    </nav>
  );
};

const Menu = () => {
  return (
    <div className="menu-btn" onClick={openMenu()}>
      Menu
      <img src={star} alt="star" />
    </div>
  );
};

export default Menu;
