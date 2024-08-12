import React from 'react';
import '../styles/Banner1.css';
import frame2 from '../images/Banner_1.svg';

function Banner1() {
  return (
    <div className="banner1">
      <img src={frame2} alt="banner_img" className="banner_img" />  
      <div className='blackrectangle'>
        <button className='purchase-button'>Придбати</button>
      </div>
      <div className='whiterectangle'>
      <button className='purchase-button2'>Придбати</button>
      </div>
    </div>
  );
}

export default Banner1;
