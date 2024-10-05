import React from 'react';
import '../styles/BannerCards.css';
import image1 from '../images/Banner_2.svg';
import ProductCard2 from '../components/ProductCard2';

function BannerCards() {
    return (
        <div className="BannerCards1">
            <div className="Banner_2">
                <div className="black-square">
                    <button className="frame-1">
                        <div className="purchase-now">
                            Придбати зараз
                        </div>
                    </button>
                </div>
                <img src={image1} alt="Banner 2" className="BannerImage" />
            </div>
            <div className="cards2">
                <ProductCard2 />
                <ProductCard2 />
                <ProductCard2 />
                <ProductCard2 />
                <ProductCard2 />
                <ProductCard2 />
                <ProductCard2 />
                <ProductCard2 />
            </div>
        </div>
    );
}

export default BannerCards;

