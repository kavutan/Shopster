import React, { useEffect, useState } from 'react';
import '../styles/Latestoffers.css';
import vector from '../images/Vector10.svg';
import heartIcon from '../images/heart_16x16.svg';
import heartIcon1 from '../images/Property 1=active.svg';
import StarReviews from './StarReviews'; 
import { PRODUCTS_LATEST } from '../Constants/url.js';

function Latestoffers() {
  const [likedItems, setLikedItems] = useState([]);
  const [products, setProducts] = useState([]); // Стан для продуктів
  const [loading, setLoading] = useState(true); // Стан для завантаження

  const toggleLike = (index) => {
    setLikedItems((prev) => {
      const newLikedItems = [...prev];
      newLikedItems[index] = !newLikedItems[index];
      return newLikedItems;
    });
  };

  useEffect(() => {
    const fetchLatestOffers = async () => {
      setLoading(true); // Встановлюємо loading в true перед запитом
      try {
        const response = await fetch(`${PRODUCTS_LATEST}/latest/2`); 
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Отримані дані:', data); // Виводимо отримані дані в консоль

        // Перевірка, чи data.$values є масивом
        if (Array.isArray(data.$values)) {
          setProducts(data.$values); // Встановлюємо масив продуктів
          setLikedItems(Array(data.$values.length).fill(false)); // Ініціалізація likedItems
        } else {
          console.error('Отримані дані не є масивом:', data);
          setProducts([]); // Встановлюємо порожній масив у випадку помилки
        }
      } catch (error) {
        console.error('Error fetching latest offers:', error);
        setProducts([]); // Встановлюємо порожній масив у випадку помилки
      } finally {
        setLoading(false);
      }
    };

    fetchLatestOffers();
  }, []); // Залишаємо один useEffect

  if (loading) {
    return <div>Завантаження...</div>; // Відображаємо текст завантаження
  }

  return (
    <div className="Latestoffers">
      <div className="title-button">
        <div className="latest-offers-title">Останні пропозиції цього тижня</div>
        <div className="button_arrow">
          <div className="show-more-button">Показати ще</div>
          <div className="group">
            <img className="vector" src={vector} alt="Vector10" />
          </div>
        </div>
      </div>
      <div className="cards">
        {products.map((product, index) => {
          const discount = product.lastPrice === product.price ? 'new' : Math.round(((product.lastPrice - product.price) / product.lastPrice) * 100);

          return (
            <div className="card_sale" key={product.id}> {/* Припускаємо, що у продукту є унікальний id */}
              <div className="discount_22">
                {discount === 'new' ? 'New' : `-${discount}%`}
              </div> {/* Елемент з дісконтом */}
              <div className="mask-group1">
                <div className="btn_like1" onClick={() => toggleLike(index)}>
                  <div className={`heart_16x16 ${likedItems[index] ? 'liked' : ''}`}>
                    <img
                      className="heart-icon"
                      src={likedItems[index] ? heartIcon1 : heartIcon}
                      alt="Heart Icon"
                    />
                  </div>
                </div>
                <div className="picture">
                  <img src={product.imageURLs.$values[0]} alt={product.productName} /> {/* Зображення з API */}
                </div>
              </div>
              <div className="frame-78">
                <div className="phone-title">
                  {product.productName} {/* Заголовок продукту з API */}
                </div>
                <div className="frame-733">
                  <StarReviews rating={product.averageRating} /> {/* Рейтинг продукту з API */}
                  <div className="reviews-count1">{product.reviews.$values.length} відгуків</div> {/* Кількість відгуків */}
                </div>
                <div className="frame-777">
                  <div className="Oldprice1">
                    <del>{product.lastPrice} грн</del> {/* Стара ціна */}
                  </div>
                  <div className="PriceNew1">{product.price} грн</div> {/* Нова ціна */}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Latestoffers;





