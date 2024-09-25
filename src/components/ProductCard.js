import React, { useState } from 'react';
import '../styles/ProductCard.css';
import heartIcon from '../images/heart_16x16.svg';
import heartIcon1 from '../images/Property 1=active.svg';
import star1 from '../images/Star1.svg';
import star2 from '../images/Star2.svg';
import basket from '../images/basket.svg';
import Caurosel from './Carousel';

function ProductCard() {
    // Створюємо стан для улюблених товарів
    const [liked, setLiked] = useState(false);

    const toggleLike = () => {
        setLiked((prev) => !prev); // Переключаємо стан
    };

    return (
        <div className="product-card">
            <div className="item-card">
                <div className="wishlistanddiscount">
                    <div className="discount">
                        -10%
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
                    <Caurosel />
                </div>
            </div>
            <div className="item-details">
                <div className="item-title">Мобільний телефон Samsung Galaxy A55 5G 8/256GB Lilac (SM-A556BLVCEUC)</div>
                <div className="frame-73">
                    <div className="reviews">
                        <div className="star_reviews">
                            <img src={star1} alt="Star1" />
                        </div>
                        <div className="star_reviews">
                            <img src={star1} alt="Star1" />
                        </div>
                        <div className="star_reviews">
                            <img src={star1} alt="Star1" />
                        </div>
                        <div className="star_reviews">
                            <img src={star2} alt="Star2" />
                        </div>
                        <div className="star_reviews">
                            <img src={star2} alt="Star2" />
                        </div>
                    </div>
                    <div className="reviews-count">27 відгуки</div>
                </div>
                <div className="PriceandCTA">
                    <div className="Price">
                        <div className="Oldprice">
                            <del>16 999 грн</del>
                        </div>
                        <div className="PriceNew">
                            15 999 грн
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






