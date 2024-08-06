import React, { useState } from 'react';
import '../styles/Header.css';
import frame from '../images/Frame.svg';
import arrowImage from '../images/Wishlist.svg';
import btnCart from '../images/Vector2.svg';
import btnWishlist from '../images/Vector.svg';

function Header({ setCurrentPage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState(0);
  const [cartprice, setCartPrice] = useState(0.00);
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src={frame} alt="Logo" />
        </div>
        <button className="catalog-button">
          <span className="catalog-image" />
        </button>
        <input type="text" id="search" name="search" placeholder="Я шукаю..." className="search-input" />

      </div>
      <div className="header2-container">

        <div className="menu-strip">
          <div className="account-menu">
            <button className="account-button" onClick={() => setMenuOpen(!menuOpen)}>
              Обліковий запис
              <img src={arrowImage} alt="arrow" className={`arrow ${menuOpen ? 'open' : ''}`} /> {/* Використовуємо зображення */}
            </button>
            {menuOpen && (
              <div className="account-options">
                <a href="/login">Увійти</a>
                <a href="/register">Реєстрація</a>
              </div>
            )}
          </div>
          <div className="welcome-message">
            <span>Привіт,</span>
            <a href="/login-form" className="login-link">Увійти тут</a>
          </div>
        </div>
        <button className="wishlist-button">
          <img src={btnWishlist} alt="Wishlist" className="icon-image" />
        </button>
        <div className="cart-section">
          <button className="cart-button">
            <img src={btnCart} alt="Cart" className="icon-image" />
          </button>
          <div className="cart-info">
            <span className="cart-items">{cartItems} предметів</span>
            <span className="cart-price">{cartprice}  ₴</span>
          </div>
        </div>

      </div>
    </header>
  );
}

export default Header;


