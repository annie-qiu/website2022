/* eslint-disable react/function-component-definition */
import React, { useState } from 'react';
import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import Home from './Home/Home';
import Work from './Work/Work';
import About from './About/About';
import Nav from './Menu/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = (props) => {
  const [color, changeColor] = useState('EBF4E6');
  console.log(color);

  return (
    <div style={{ background: color }}>
      <BrowserRouter>
        <Nav />
        <div className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/Work" element={<Work />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
