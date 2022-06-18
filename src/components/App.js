/* eslint-disable react/function-component-definition */
import React from 'react';
import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import Home from './home/home';
import Work from './work/work';
import About from './about/about';
import Nav from './nav/nav';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = (props) => {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
