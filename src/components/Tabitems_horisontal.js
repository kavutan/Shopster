import React, { useState, useEffect } from 'react';
import '../styles/Tabitems_horisontal.css';
import vector from '../images/Vector10.svg';
import ProductCard from './ProductCard';
import { PRODUCTS_URL } from '../Constants/url.js';

function Tabitems_horisontal() {
  const [activeTab, setActiveTab] = useState(1);
  const [products, setProducts] = useState([]);
  const [startIndex, setStartIndex] = useState(0); // Індекс початку для показу продуктів
  const productsPerPage = 5; // Кількість продуктів на сторінці

  // Обробка зміни вкладки (таб)
  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
    setStartIndex(0); // Скидаємо індекс до початку при зміні вкладки
    setProducts([]); // Очищуємо продукти при зміні категорії
  };

  
  const fetchProducts = async (categoryId) => {
    try {
      const response = await fetch(`${PRODUCTS_URL}/top/${categoryId}/50`); // Отримуємо одразу багато продуктів
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      const newProducts = data.$values;

      setProducts(newProducts); // Зберігаємо всі продукти
    } catch (error) {
      console.error('Виникла помилка при отриманні даних:', error);
    }
  };

  // Виклик fetchProducts при зміні активної вкладки
  useEffect(() => {
    const categoryId = activeTab === 1 ? 3 : 1; // ID категорій
    fetchProducts(categoryId);
  }, [activeTab]);

  // Обробник для показу наступних продуктів
  const handleShowMore = () => {
    const newIndex = (startIndex + productsPerPage) % products.length; // Циклічний перехід по продуктах
    setStartIndex(newIndex); // Оновлюємо індекс початку для наступної порції продуктів
  };

  // Вибір продуктів для відображення (тільки 5 продуктів починаючи з startIndex)
  const displayedProducts = [
    ...products.slice(startIndex, startIndex + productsPerPage),
    ...(startIndex + productsPerPage > products.length
      ? products.slice(0, (startIndex + productsPerPage) % products.length)
      : [])
  ];

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
            className={`tab_menu ${activeTab === 2 ? 'active' : ''}`}
            onClick={() => handleTabClick(2)}
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
        {displayedProducts.map((product, index) => (
          <div key={index} className="grid-item">
            <ProductCard
              productName={product.productName}
              price={product.price}
              lastPrice={product.lastPrice}
              description={product.description}
              imageURLs={product.imageURLs?.$values || []}
              averageRating={Math.round(product.averageRating)}
              reviewCount={product.reviews?.$values.length || 0}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tabitems_horisontal;

