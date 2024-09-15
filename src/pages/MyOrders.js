
import React, { useState, useEffect } from 'react';
import { getToken, getId } from '../helpers/auth'; // Вкажіть правильний шлях
import '../styles/MyOrders.css';
import { GETMYORDERS_URL } from '../Constants/url.js';
import DragDownOrder from '../components/DragDownOrder';
import Down from '../components/Down';

const MyOrders = () => {
    const [orders, setOrders] = useState([]); // Створюємо стан для збереження замовлень
    const [isShowDown, setIsShowDown] = useState(false); // Створюємо стан для збереження замовлень
    const [error, setError] = useState(null); // Створюємо стан для збереження помилок
    const [gap, setGap] = useState('42.43vw'); // Створюємо стан для gap
  
    useEffect(() => {
      const token = getToken(); // Отримуємо токен з sessionStorage
      //alert(`Токен  з effect = ${token}`);

      const id = getId();
      if (token) {
        fetch(`${GETMYORDERS_URL}/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`, // Передаємо токен у заголовку
            'Content-Type': 'application/json',
          }
        })
          .then(response => {
            if (!response.ok) {
              throw new Error('Помилка при виконанні запиту');
            }
            return response.json();
          })
          .then(data => {
            if (data && Array.isArray(data.$values)) {
                setOrders(data.$values); // Встановлюємо масив з $values у стан
            } else {
                setOrders([]); // Якщо не масив, встановлюємо порожній масив
            }
            alert('Data OK: ' + JSON.stringify(data.$values, null, 2)); // Виводимо масив у форматі JSON
            alert('Orders State: ' + JSON.stringify(orders, null, 2)); // Виводимо дані з стану orders
          })
          .catch(error => {
            setError('Помилка: ' + error.message); // Обробка помилки
          });
      } else {
        setError('Токен не знайдений');
      }
    }, []); // Порожній масив залежностей, щоб виконати ефект тільки при завантаженні сторінки
  
    useEffect(() => {
        if (orders.length > 0) {
          alert('Orders State: ' + JSON.stringify(orders, null, 2)); // Виводимо дані з стану orders
        }
      }, [orders]); // Запуститься, коли `orders` зміниться

    return (
      <div className="my-orders">
           <h3 className="text-1">Мої замовлення</h3>  
        <div className="frame-302" style={{ gap }}>      
          <div className="frame-220">
          <input
             type="text"
             placeholder="Я шукаю..."
             className="search-input"
        />
        <button className="search-button">Знайти замовлення</button>
        </div>  
        {!isShowDown &&( <DragDownOrder isShowDown={isShowDown} setIsShowDown={setIsShowDown} setGap={setGap}>
            </DragDownOrder>)}
        {isShowDown &&(          
           <Down isShowDown={isShowDown} setIsShowDown={setIsShowDown} setGap={setGap}>
           </Down>
        )}                
        </div>
      
       
       
        <div className="frame-334">
          {error ? (
            <p>{error}</p>
          ) : (
            <table>
            <thead>
              <tr>
                <th>Товар</th>
                <th>Вартість</th>
                <th>Дата замовлення</th>
                <th>Статус</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(order => (
                <tr key={order.id}>
                  <td>
                    <div className="product-info">
                      {/* Перевіряємо, чи є order.product перед доступом до властивостей */}
                      {order.product ? (
                        <>
                          <img src={order.product.imageUrl} alt={order.product.productName} className="product-image" />
                          <div className="product-description">
                            <strong>{order.product.productName}</strong>
                            <p>{order.product.description}</p>
                          </div>
                        </>
                      ) : (
                        <p>Product not available</p>
                      )}
                    </div>
                  </td>
                  <td>{order.product ? order.product.price.toFixed(2) + ' грн' : 'N/A'}</td>
                  <td>{new Date(order.orderDate).toLocaleDateString()}</td>
                  <td>{order.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
          
          )}
        </div>
      </div>
    );
  };

export default MyOrders;