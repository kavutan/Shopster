import React from 'react';
import '../styles/Latestoffers.css';
import vector from '../images/Vector10.svg';

function Latestoffers() {
  return (
    <div className="Latestoffers">
      <div className="title-button">
        <div className='latest-offers-title'>Останні пропозиції цього тижня</div>
        <div className="button_arrow">
          <div className="show-more-button">Показати ще</div>
          <div className="group">
            <img className="vector" src={vector} alt="Vector10" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Latestoffers;
