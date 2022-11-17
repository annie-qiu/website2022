/* eslint-disable react/function-component-definition */
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Background from '../../assets/images/backgrounds/bg.png';
import MobileBg from '../../assets/images/backgrounds/bg-mobile.png';
import Weather from './weather';
import Clock from './clock';
import Sticker from './sticker';
import './home.scss';
import stickerUrls from './sticker_urls';

const Home = () => {
  const isDesktop = useMediaQuery({ minWidth: 420 });

  const stickers = stickerUrls.map((sticker) => {
    return (
      <Sticker img={sticker.img} x={sticker.x} y={sticker.y} width={sticker.width} />
    );
  });
  if (isDesktop) {
    return (
      <div className="page">
        <img id="home-bg" src={Background} alt={Background} />
        {stickers}
        <div className="content">
          <div className="heading">
            <div className="title">Annie Qiu ✧ 邱烨</div>
            <div className="description">
              designer, developer, and artist @ Dartmouth College
            </div>
          </div>
          <div className="extra">
            <Weather />
            <Clock />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="page">
        <img id="home-bg" src={MobileBg} alt={MobileBg} />
        <div className="content">
          <div className="heading">
            <div className="title">Annie Qiu</div>
            <div className="description">
              designer, developer, and artist @ Dartmouth College
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Home;
