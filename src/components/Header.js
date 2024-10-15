import React, { useState, useEffect, useRef } from 'react';
import '../styles/Header.css';
import '../styles/Left-sidebar.css';
import frame from '../images/Frame.svg';
import arrowImage from '../images/Wishlist.svg';
import btnCart from '../images/Vector2.svg';
import btnWishlist from '../images/Vector.svg';
import btnComponent30 from '../images/Component30.svg';
import LeftSidebarPage from '../components/LeftSidebarPage';
import {getName} from '../helpers/auth';
import { Link } from 'react-router-dom';

const Header = ({ setCurrentPage }) => {
  
  const [userName1, setUserName] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState(0);
  const [cartPrice, setCartPrice] = useState(0.00);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const menuRef = useRef(null);
  const storedToken = JSON.parse(sessionStorage.getItem('tokenKey'));
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
 
  const handleLogout = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    localStorage.removeItem('token'); 
    sessionStorage.removeItem('tokenKey');
    setUserName(''); 
    setMenuOpen(false);
  };


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
        
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  useEffect(() => {
    
    if (storedToken) {
      const uName = getName();
      setUserName(uName);
    }
  }, [storedToken]);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src={frame} alt="Logo" />
        </div>
        <button className="catalog-button" onClick={toggleSidebar}>
          <span className="catalog-image" />
        </button>
        {isSidebarOpen && (
          <LeftSidebarPage
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
        )}

        <input
          type="text"
          id="search"
          name="search"
          placeholder="Я шукаю..."
          className="search-input"
        />
      </div>
      <div className="header2-container">
        <div className="menu-strip">
          <div className="account-menu" ref={menuRef}>
            <button
              className="account-button" onClick={() => setMenuOpen(!menuOpen)}>
              Обліковий запис
              <img
                src={arrowImage}
                alt="arrow"
                className={`arrow ${menuOpen ? 'open' : ''}`} />
            </button>
            {menuOpen && (
              <div className="account-options">
                <Link to="/login" className="account-option-button">
                  Увійти
                </Link>
                <Link to="/login?tab=register" className="account-option-button">
                  Зареєструватись
                </Link>
                <Link to="/" className="account-option-button" onClick={handleLogout}>
                  Вийти
                </Link>
              </div>
            )}
          </div>
          <div className="welcome-message">
            <span>Привіт, </span>
            {userName1 ? (
              <span>{userName1}</span>
            ) : (
              <Link to="/login" className="account-option-button">
                Увійти тут
              </Link>
            )}
          </div> 

        </div>
        <Link to="/wishlist" className="wishlist-button">
          <img
            src={btnWishlist}
            alt="Wishlist"
            className="icon-image"
          />
        </Link>
        <button className="component30">
          <img
            src={btnComponent30}
            alt="Component30"
            className="icon-image"
          />
        </button>
        <Link to="/cart" className="cart-button">
          <img
            src={btnCart}
            alt="Cart"
            className="icon-image"
          />
        </Link>
        <div className="cart-info">
          <span className="cart-items">{cartItems} предметів</span>
          <span className="cart-price">{cartPrice} ₴</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
