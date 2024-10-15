import React, { useState } from 'react';
import '../styles/Tabitems_horisontal.css';
import vector from '../images/Vector10.svg';
import ProductCard from './ProductCard';
import '../styles/Tabitems_horisontal2.css';

function Tabitems_horisontal() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className="tabitems_horisontal2">
      <div className="frame-702">
        <div className='frame-69'>
          <div className='frame-682'>
            <div className='typography-body1-bold2'>Гарячі пропозиції цього тижня |</div>
          </div>
        </div>
        <div className="button_arrow">
          <div className="show-more-button">Показати ще</div>
          <div className="group">
            <img className="vector" src={vector} alt="Vector10" />
          </div>
        </div>
      </div>
      <div className="grid-container">
        <div className="grid-item">
          <ProductCard />
        </div>
        <div className="grid-item">
          <ProductCard />
        </div>
        <div className="grid-item">
          <ProductCard />
        </div>
        <div className="grid-item">
          <ProductCard />
        </div>
        <div className="grid-item">
          <ProductCard />
        </div>
      </div>
    </div>
  );
}

export default Tabitems_horisontal;
