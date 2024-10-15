import React, { useState } from 'react';
import '../styles/Cart.css';

const Cart = ({ cartItems = [], totalPrice, deliveryInfo = { method: 'pickup', price: 0, address: '' }, onApplyDiscount, onRemoveAll }) => {
  const [discountCode, setDiscountCode] = useState('');
  
  const handleApplyCode = () => {
    onApplyDiscount(discountCode);
  };

  return (
    <div className="cart-container">
      <div className="cart-items-section">
        <div className="free-delivery-info">
          Для безкоштовної доставки вам залишилось додати товару ще на <span className="highlight">1200₴</span>
        </div>
        <div className="cart-table">
          <table>
            <thead>
              <tr>
                <th>Товар</th>
                <th>Вартість</th>
                <th>Кількість</th>
                <th>Всього</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index}>
                  <td className="cart-item">
                    <img src={item.image} alt={item.name} className="cart-item-image" />
                    <span>{item.name}</span>
                  </td>
                  <td className="cart-item-price">{item.price}₴</td>
                  <td>
                    <input type="number" defaultValue={item.quantity} min="1" />
                  </td>
                  <td>{item.price * item.quantity}₴</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="discount-section">
          <input 
            type="text" 
            placeholder="Код для знижки" 
            className="discount-input"
            value={discountCode}
            onChange={(e) => setDiscountCode(e.target.value)}
          />
          <button className="apply-discount-button" onClick={handleApplyCode}>Застосувати код</button>
          <button className="remove-all-button" onClick={onRemoveAll}>Видалити все</button>
        </div>
      </div>
      <div className="cart-summary-section">
        <h2>Замовлення</h2>
        <div className="summary-item">
          <span>Проміжний підсумок</span>
          <span>{totalPrice}₴</span>
        </div>
        <div className="summary-item">
          <span>Доставка:</span>
          <span>{deliveryInfo.method === 'pickup' ? 'Самовивіз' : `${deliveryInfo.method}: ${deliveryInfo.price}₴`}</span>
        </div>
        <div className="summary-address">
          <p>Доставка до</p>
          <p>{deliveryInfo.address}</p>
          <button className="change-address-button">Змінити адресу</button>
        </div>
        <div className="summary-total">
          <span>Загальна сума</span>
          <span>{totalPrice + deliveryInfo.price}₴</span>
        </div>
        <button className="checkout-button">Оформити замовлення</button>
      </div>
    </div>
  );
};

export default Cart;