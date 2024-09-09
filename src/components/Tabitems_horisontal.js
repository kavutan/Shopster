import React, { useState } from 'react';
import '../styles/Tabitems_horisontal.css';
import vector from '../images/Vector10.svg';
import ProductCard from './ProductCard';

function Tabitems_horisontal() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className="tabitems_horisontal">
      <div className="frame-70">
        <div className='frame-69'>
          <div className='frame-68'>
            <div className='typography-body1-bold'>Рекомендовані товари</div>
          </div>
          <a
            href="#"
            className={`tab_menu ${activeTab === 1 ? 'active' : ''}`}
            onClick={() => handleTabClick(1)}
          >
            <div className='typography-body2-bold'>Смартфони, ТВ</div>
          </a>
          <a
            href="#"
            className={`tab_menu ${activeTab === 2 ? 'active' : ''}`}
            onClick={() => handleTabClick(2)}
          >
            <div className='typography-body2-bold'>Ноутбуки, комп'ютери</div>
          </a>
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
