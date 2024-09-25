import React, { useState } from 'react';
import '../styles/Latestoffers.css';
import vector from '../images/Vector10.svg';
import heartIcon from '../images/heart_16x16.svg';
import heartIcon1 from '../images/Property 1=active.svg';
import image1 from '../images/image1.svg';
import image2 from '../images/image 2.svg'; 

function Latestoffers() {
  const [likedItems, setLikedItems] = useState([false, false]);

  const toggleLike = (index) => {
    setLikedItems((prev) => {
      const newLikedItems = [...prev];
      newLikedItems[index] = !newLikedItems[index];
      return newLikedItems;
    });
  };

  const images = [image1, image2]; 

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
        {[0, 1].map((index) => (
          <div className="card_sale" key={index}>
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
                <img src={images[index]} alt={`image${index + 1}`} /> 
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Latestoffers;







