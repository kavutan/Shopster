import React, { useState } from 'react';
import '../styles/Cart.css';

const Cart = ({ 
  cartItems = [], 
  totalPrice = 15000, 
  deliveryInfo = { 
    method: 'pickup', 
    price: 80, 
    address: [
      'м. Львів, Львівська обл. ', 
      'вул. Скорика, 6 ', 
      'Відділення: ',
      '№55, вул. Скорика'
    ] 
  }, 
  onApplyDiscount, 
  onRemoveAll 
}) => {  
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };  
  const handleApplyCode = () => {
    onApplyDiscount(discountCode);
  };
  
  const [discountCode, setDiscountCode] = useState('');
  const [Frame152Value, setFrame152Value] = useState(50000);
  const [progressDelivery, setprogressDelivery] = useState(totalPrice / Frame152Value * 100);
  const [isChecked, setIsChecked] = useState(false);  

  const ProgressBarDelivery = ({ progress }) => {
    return (
      <div 
          style={{
          width: `${progress}%`, 
          backgroundColor: '#6746CE', 
          height: '0.5vw',
          padding: '0vw',
          transition: 'width 0.5s ease-in-out',
          borderRadius: '1.1vw'
        }}
      />
    );
  };

  return (
    <div className="cart-container">
      <div className="cart-items-section">
      <div className="widget_Freedelivery">
        <div className="Message">
            <div className="Frame-152">
              <p className="p_Text" >Для безкоштовної доставки вам залишилось додати товару ще на </p>
              <p className="p_Value">{`${Frame152Value - totalPrice}₴`}</p>
            </div>
          </div>
          <div className="Frame-151">
            <ProgressBarDelivery progress={progressDelivery} />
          </div>
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
        {/* 1: Заголовок замовлення */}
        <div className="summary-header">
          <h2>Замовлення</h2>
        </div>

        {/* 2: Проміжний підсумок */}
        <div className="summary-subtotal">
          <div className="summary-item">
            <span>Проміжний підсумок</span>
            <span>{totalPrice}₴</span>
          </div>
        </div>

        {/* 3: Доставка (радіокнопки, адреса і кнопка зміни адреси) */}
        <div className="summary-delivery">
          <div className="delivery-method">
            <span>Нова Пошта: {deliveryInfo.price}₴</span>
            <input type="radio" name="delivery" value="nova-poshta" defaultChecked />
          </div>
          <div className="delivery-method">
            <span>Самовивіз</span>
            <input type="radio" name="delivery" value="pickup" />
          </div>

          <div className="summary-address">
            <div class="address-container">
              <p className="delivery-label">Доставка:</p>
              <p className="delivery-address">Доставка до <br/> {deliveryInfo.address}</p>
            </div>
            <button className="change-address-button">Змінити адресу</button>
          </div>
        </div>

        {/* 4: Загальна сума */}
        <div className="summary-total">
          <span>Загальна сума</span>
          <span>{totalPrice + deliveryInfo.price}₴</span>
        </div>

        {/* 5: Кнопка оформлення замовлення */}
        <div className="summary-checkout">
          <button className="checkout-button">Оформити замовлення</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;