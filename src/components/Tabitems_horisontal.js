import React, { useState, useEffect } from 'react';
import '../styles/Tabitems_horisontal.css';
import vector from '../images/Vector10.svg';
import ProductCard from './ProductCard';
import { PRODUCTS_URL } from '../Constants/url.js';

function Tabitems_horisontal() {
  const [activeTab, setActiveTab] = useState(1); 
  const [products, setProducts] = useState([]); 
  const [limit, setLimit] = useState(5); 

  
  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex); 
    setLimit(5); 
  };

  
  const fetchProducts = async (categoryId, limit) => {
    try {
      const response = await fetch(`${PRODUCTS_URL}/top/${categoryId}/${limit}`); 
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      const products = data.$values;

      console.log('Отримані продукти:', products);

      setProducts(products); 
    } catch (error) {
      console.error('Виникла помилка при отриманні даних:', error);
    }
  };

  
  useEffect(() => {
    const categoryId = activeTab === 1 ? 3 : 1; 
    fetchProducts(categoryId, limit); 
  }, [activeTab, limit]); 

  
  const handleShowMore = () => {
    setLimit((prevLimit) => prevLimit + 5); 
  };

  return (
    <div className="tabitems_horisontal">
      <div className="frame-70">
        <div className='frame-69'>
          <div className='frame-68'>
            <div className='typography-body1-bold'>Рекомендовані товари</div>
          </div>
          <a
            
            className={`tab_menu ${activeTab === 1 ? 'active' : ''}`} 
            onClick={() => handleTabClick(1)} 
          >
            <div className='typography-body2-bold'>Смартфони, ТВ</div>
          </a>
          <a
            
            className={`tab_menu ${activeTab === 2 ? 'active' : ''}`} // Активний клас для другої вкладки
            onClick={() => handleTabClick(2)} // Обробник кліку для другої вкладки
          >
            <div className='typography-body2-bold'>Ноутбуки, комп'ютери</div>
          </a>
        </div>
        <div className="button_arrow">
          <div className="show-more-button" onClick={handleShowMore}>
            Показати ще
          </div>
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
              averageRating={Math.round(product.averageRating)} 
              reviewCount={product.reviews.$values.length}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tabitems_horisontal;
