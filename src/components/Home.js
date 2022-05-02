/* eslint-disable react/function-component-definition */
import React from 'react';
import aura from '../img/home/aura.svg';
import star from '../img/home/greenstar2.svg';
import orange from '../img/home/orange.png';
import swirl from '../img/home/swirl.png';
import yellowFlower from '../img/home/yellowflower.svg';
import Sticker from './Sticker';

const Home = (props) => {
  const stickerUrls = [
    {
      img: aura,
      x: 400,
      y: -80,
      width: 190,
    },
    {
      img: star,
      x: -370,
      y: 170,
      width: 120,
    },
    {
      img: orange,
      x: 480,
      y: 200,
      width: 180,
    },
    {
      img: swirl,
      x: -430,
      y: -144,
      width: 130,
    },
    {
      img: yellowFlower,
      x: -250,
      y: 0,
      width: 90,
    },
  ];
  const stickers = stickerUrls.map((sticker) => {
    return (
      <Sticker img={sticker.img} x={sticker.x} y={sticker.y} width={sticker.width} />
    );
  });
  return (
    <div className="home">
      <div className="home-text">
        <h1 className="page-title">Annie Qiu</h1>
        <p>designer, developer, and artist @ Dartmouth College</p>
      </div>
      {stickers}
    </div>
  );
};

export default Home;
