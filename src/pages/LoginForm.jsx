import React, { useState } from 'react';
import '../styles/LoginForm.css';
import { useNavigate } from 'react-router-dom'; // Якщо ви використовуєте React Router
import { LOGIN_URL, REGISTER_URL } from '../Constants/url.js';


const LoginForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate(); // Для навігації після входу

  // Стан для форми
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      Email: email,
      PasswordHash: password,
      RoleId: 2, // Наприклад, "2" для звичайного користувача
      Phone: '', // Порожнє значення або дефолтний номер
      Address: '', // Порожнє значення або дефолтна адреса
      CreatedAt: new Date().toISOString(), // Поточна дата і час
      LastLogin: null, // Значення null для останнього входу
    };

    if (!isLogin) {
      userData.UserName = userName;
    }

    try {
      const response = await fetch(isLogin ? LOGIN_URL : REGISTER_URL, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Помилка при обробці запиту.');
      }

      const data = await response.json();
      console.log(data); // Обробляємо успішну відповідь від сервера

      if (isLogin) {
        sessionStorage.setItem('tokenKey', JSON.stringify(data));
        alert(`Вхід успішний!= ${data.access_token}`);
        navigate('/'); // Перенаправлення на головну сторінку
      } else {
        alert('Реєстрація успішна!');
      }
    } catch (error) {
      console.error('There was a problem with your fetch operation:', error);
      alert(isLogin ? 'Вхід не вдався. Спробуйте ще раз.' : 'Реєстрація не вдалася. Спробуйте ще раз.');
    }
  };

  return (
    <div className="login-form-container">
      <div className="login-form-wrapper">
        <div className="tabs">
          <button 
            className={`login-button ${isLogin ? 'active' : ''}`} 
            onClick={() => setIsLogin(true)}
          >
            Увійти
          </button>
          <button 
            className={`register-button ${!isLogin ? 'active' : ''}`} 
            onClick={() => setIsLogin(false)}
          >
            Створити обліковий запис
          </button>
        </div>
        <div className="login-form">
          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <label htmlFor="username">
                Ім'я
                <label className="required"></label>
                <input
                  type="text"
                  id="username"
                  placeholder="Ім'я"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  required={!isLogin}
                />
              </label>
            )}
            <label htmlFor="email">
              Електронна пошта
              <label className="required"></label>
              <input
                type="email"
                id="email"
                placeholder="Електронна пошта"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <label htmlFor="password">
              Пароль
              <label className="required"></label>
              <input
                type="password"
                id="password"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
            {!isLogin && (
              <div className="text-container">
                Ваші особисті дані будуть використовуватися для підтримки вашого досвіду на цьому веб-сайті, щоб керувати доступом до вашого облікового запису та для інших цілей, описаних у нашій <a href="#">політиці конфіденційності</a>.
              </div>
            )}
            {isLogin && (
              <label>
                <input type="checkbox" />
                Запам'ятати мене
              </label>
            )}
            <button type="submit">{isLogin ? 'Увійти' : 'Створити'}</button>
          </form>
          {isLogin && <a href="/privacy-policy">Втратили пароль?</a>}
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

