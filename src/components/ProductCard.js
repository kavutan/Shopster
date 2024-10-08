import React, { useState } from 'react';
import '../styles/ProductCard.css';
import heartIcon from '../images/heart_16x16.svg';
import heartIcon1 from '../images/Property 1=active.svg';
import basket from '../images/basket.svg';
import StarReviews from './StarReviews'; 
import Carousel from './Carousel';

function ProductCard({ productName, price, lastPrice, description, imageURLs }) {
    const [liked, setLiked] = useState(false);
    const discount = Math.round(((lastPrice - price) / lastPrice) * 100); // Розрахунок знижки

    const toggleLike = () => {
        setLiked((prev) => !prev);
    };

    return (
        <div className="product-card">
            <div className="item-card">
                <div className="wishlistanddiscount">
                    <div className="discount">
                        {discount > 0 ? `-${discount}%` : null}
                    </div>
                    <div className="btn_like" onClick={toggleLike}>
                        <div className="Vector">
                            <img
                                src={liked ? heartIcon1 : heartIcon}
                                alt="Heart Icon"
                            />
                        </div>
                    </div>
                </div>
                <div className="slider-item-preview">
                    {/* Передаємо зображення в компонент Carousel */}
                    <Carousel images={imageURLs} />
                </div>
            </div>
            <div className="item-details">
                <div className="item-title">{productName}</div>
                <div className="frame-73">
                    <div className="reviews">
                        <StarReviews rating={3} />
                    </div>
                    <div className="reviews-count">27 відгуків</div>
                </div>
                <div className="PriceandCTA">
                    <div className="Price">
                        <div className="Oldprice">
                            <del>{lastPrice} грн</del>
                        </div>
                        <div className="PriceNew">
                            {price} грн
                        </div>
                    </div>
                    <div className="btn_basket">
                        <img src={basket} alt="basket" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
