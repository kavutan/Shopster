import React, { useState } from 'react';
import '../styles/ProductCard2.css';
import heartIcon from '../images/heart_16x16.svg';
import heartIcon1 from '../images/Property 1=active.svg';
import basket from '../images/basket.svg';
import StarReviews from './StarReviews';
import Caurosel2 from './Carousel2';
import Ispresent from '../images/Frame 108.svg';
import Nopresent from '../images/Frame 108-1.svg';


function ProductCard() {
    const [liked, setLiked] = useState(false);
    const [rating] = useState(4);

    const toggleLike = () => {
        setLiked((prev) => !prev);
    };
    const [present, setPresent] = useState(1);

    return (
        <div className="product-card2">
            <div className="item-card2">
                <div className="wishlistanddiscount2">
                    <div className="discount2">
                        -10%
                    </div>
                    <div className="btn_like2" onClick={toggleLike}>
                        <div className="Vector2">
                            <img
                                src={liked ? heartIcon1 : heartIcon}
                                alt="Heart Icon"
                            />
                        </div>
                    </div>
                </div>
                <div className="slider-item-preview2">
                    <Caurosel2 />
                </div>
            </div>
            <div className="item-details2">
                <div className="item-title2">Мобільний телефон Samsung Galaxy A55 5G 8/256GB Lilac (SM-A556BLVCEUC)</div>
                <div className="Frame734">
                    <div className="reviews2">
                        <StarReviews rating={3} />
                        <div className="reviews-count2">27 відгуків</div>
                    </div>
                </div>
                <div className="Frame77">
                    <div className="Oldprice2">
                        <del>16 999 грн</del>
                    </div>
                    <div className="PriceNew2">
                        15 999 грн
                    </div>
                </div>
                <div className="Frame108">
                    <img
                        src={present === 1 ? Ispresent : Nopresent}
                        alt={present === 1 ? "Present image" : "No Present image"}
                    />
                </div>
            </div>

        </div>
    );
}

export default ProductCard;
