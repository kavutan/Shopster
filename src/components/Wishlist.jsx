import React, { useState } from 'react';
import '../styles/Wishlist.css';
import emptyWishlistImage from '../images/empty_wishlist.svg';

const WishlistPage = ({ setCurrentPage, wishlistItems = [] }) => {
  const [email, setEmail] = useState('');
  const [discountCode, setDiscountCode] = useState('');
  
  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log('Підписано з email:', email);
  };

  const handleApplyCode = () => {
    console.log('Застосовано код знижки:', discountCode);
  };

  return (
    <div className="wishlist-container">
      {wishlistItems.length === 0 ? (
        <div>
          <img 
            src={emptyWishlistImage} 
            alt="Порожній список бажань" 
            className="empty-wishlist-image"
          />
          <h1>Список бажань</h1>
          <p>Ваш список бажань наразі порожній.</p>
          <button className="return-button" onClick={() => setCurrentPage('home')}>
            Повернутися до магазину
          </button>
          <div className="subscribe-section">
            <div className="subscribe-text">
              <p className="subscribe-message">
                Приєднуйтеся до нашої розсилки, щоб отримати знижку 500₴
              </p>
              <p className="subscribe-details">
                Отримуйте наші електронні листи, щоб дізнаватися про новинки, розпродажі та багато іншого.
              </p>
              <p className="subscribe-disclaimer">
                Зареєструйтеся зараз, щоб отримувати останні оновлення про акції та купони. Не хвилюйтеся, ми не розсилаємо спам!
              </p>
            </div>
            <div className="subscribe-form-container">
              <form className="subscribe-form" onSubmit={handleSubscribe}>
                <table className="subscribe-table">
                  <tbody>
                    <tr>
                      <td>
                        <input 
                          type="email" 
                          placeholder="Введіть адресу вашої електронної пошти" 
                          className="subscribe-input"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </td>
                      <td>
                        <button type="submit" className="subscribe-button">Надіслати</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </form>
              <p className="subscribe-agreement">
                Підписуючись, ви погоджуєтесь з нашими <a href="/terms" className="agreement-link"> Умовами</a> та <a href="/privacy-policy" className="agreement-link"> Політикою конфіденційності </a> та <a href="/cookie-policy" className="agreement-link"> файлів cookie</a>.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1 className="not-empty-header">Список бажань</h1>
          <table className="wishlist-table">
            <thead>
              <tr>
                <th></th>
                <th>Товар</th>
                <th>Вартість</th>
                <th>Додано</th>
                <th>Статус</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {wishlistItems.map((item, index) => (
                <tr key={index}>
                  <td className="product-info">
                    <input type="checkbox" className="wishlist-checkbox" />
                    <button className="remove-button">x</button>
                    <img src={item.image} alt={item.name} className="product-image" />
                  </td>
                  <td className="product-img">
                    <span>{item.name}</span>
                  </td>
                  <td className="product-price">{item.price}</td>
                  <td className="product-date">{item.addedDate}</td>
                  <td className="product-status">{item.status}</td>
                  <td>
                    <button className="add-to-cart-button">Додати до кошика</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="wishlist-actions">
            <div className="left-actions">
              <input 
                type="text" 
                placeholder="Код для знижки" 
                className="discount-input"
                value={discountCode}
                onChange={(e) => setDiscountCode(e.target.value)}
              />
              <button className="apply-code-button" onClick={handleApplyCode}>Застосувати код</button>
            </div>

            <div className="right-actions">
              <button className="delete-all-button">Видалити все</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
