/* eslint-disable react/function-component-definition */
import React, { useState } from 'react';
import {
  BrowserRouter, Route, Routes, NavLink,
} from 'react-router-dom';
import Home from './Home';
import Work from './Work';
import About from './About';
import 'bootstrap/dist/css/bootstrap.min.css';

const Nav = (props) => {
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

const App = (props) => {
  const [color, changeColor] = useState('EBF4E6');
  console.log(color);

  return (
    <div className="main" style={{ background: color }}>
      <BrowserRouter>
        <Nav changeColor={changeColor} />
        {/* <NavLink to="/" onClick={() => changeColor('#EBF4E6')}>Home</NavLink> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Work" element={<Work />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
