import React from 'react';
import Background from '../../assets/images/bg.png';
import Weather from './weather';
import Clock from './clock';
import Sticker from './Sticker';
import './home.scss';
import stickerUrls from './sticker_urls';

function Home() {
  const stickers = stickerUrls.map((sticker) => {
    return (
      <Sticker img={sticker.img} x={sticker.x} y={sticker.y} width={sticker.width} />
    );
  });
  return (
    <div className="home">
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
}

export default Home;
