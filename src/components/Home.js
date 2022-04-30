/* eslint-disable react/function-component-definition */
import React from 'react';
import aura from '../img/aura.svg';
import svpp from '../img/svpp.png';
import Sticker from './Sticker';

const Home = (props) => {
  const stickerUrls = [svpp, aura];
  const stickers = stickerUrls.map((sticker) => {
    return (
      <div className="sticker">
        <Sticker img={sticker} />
      </div>
    );
  });
  return (
    <div className="home">
      <h1 className="page-title">Annie Qiu</h1>
      <p>designer, developer, and artist @ Dartmouth College</p>
      {stickers}
    </div>
  );
};

export default Home;
