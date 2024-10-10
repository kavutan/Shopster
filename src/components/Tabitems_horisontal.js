import React, { useState, useEffect } from 'react';
import '../styles/Tabitems_horisontal.css';
import vector from '../images/Vector10.svg';
import ProductCard from './ProductCard';
import { PRODUCTS_URL } from '../Constants/url.js'; 

function Tabitems_horisontal() {
  const [activeTab, setActiveTab] = useState(1);
  const [products, setProducts] = useState([]);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const fetchProducts = async () => {
    try {
      const response = await fetch(`${PRODUCTS_URL}/top/3/5`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      const products = data.$values;
      setProducts(products);
    } catch (error) {
      console.error('Виникла помилка при отриманні даних:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

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

      {/* Генерація ProductCard динамічно */}
      <div className="grid-container">
        {products.map((product, index) => (
          <div key={index} className="grid-item">
            <ProductCard
              productName={product.productName}
              price={product.price}
              lastPrice={product.lastPrice}
              description={product.description}
              imageURLs={product.imageURLs.$values}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tabitems_horisontal;
