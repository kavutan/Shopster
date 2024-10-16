import React, { useState, useEffect } from 'react'; 
import '../styles/Tabitems_horisontal.css';
import vector from '../images/Vector10.svg';
import ProductCard from './ProductCard';
import '../styles/Tabitems_horisontal2.css';
import { PRODUCTS_URL } from '../Constants/url.js';
import CountdownTimer from './CountdownTimer';

function Tabitems_horisontal() {
  const [products, setProducts] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const productsPerPage = 5;

  const fetchTopDiscountedProducts = async (limit) => {
    try {
      const response = await fetch(`${PRODUCTS_URL}/top-discounted/25`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      const newDiscountedProducts = data.$values || [];
      setProducts(newDiscountedProducts);
      console.log('Fetched Products:', newDiscountedProducts); 
    } catch (error) {
      console.error('Виникла помилка при отриманні даних:', error);
    }
  };

  useEffect(() => {
    fetchTopDiscountedProducts(20);
  }, []);

  const handleShowMore = () => {
    const newIndex = (startIndex + productsPerPage) % products.length;
    setStartIndex(newIndex);
  };

  const displayedProducts = products.slice(startIndex, startIndex + productsPerPage);

  if (displayedProducts.length < productsPerPage && products.length > 0) {
    const remainingProducts = products.slice(0, productsPerPage - displayedProducts.length);
    displayedProducts.push(...remainingProducts);
  }

  console.log('Displayed Products:', displayedProducts); // Логування відображуваних продуктів

  return (
    <div className="tabitems_horisontal2">
      <div className="frame-702">
        <div className='frame-69'>
          <div className='frame-682'>
            <div className='typography-body1-bold2'>Гарячі пропозиції цього тижня |</div>
            <CountdownTimer />
          </div>
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
      <div className="grid-container">
        {displayedProducts.length > 0 ? (
          displayedProducts.map((product, index) => (
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
          ))
        ) : (
          <div className="no-products">Немає доступних продуктів.</div>
        )}
      </div>
    </div>
  );
}

export default Tabitems_horisontal;
