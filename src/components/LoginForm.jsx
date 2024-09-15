import React, { useState } from 'react';
import '../styles/LoginForm.css';

const LoginForm = () => {
  const [isLogin, setIsLogin] = useState(true);

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
      const response = await fetch(`http://localhost:5123/gateway/users${isLogin ? 'autorizes/0' : ''}`, {
        method: isLogin ? 'PUT' : 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error('Помилка при обробці запиту.');
      }

      const data = await response.json();
      console.log(data); // Обробляємо успішну відповідь від сервера

      if (isLogin) {
        sessionStorage.setItem('tokenKey', JSON.stringify(data));
        alert('Вхід успішний!');
        window.location.href = 'index.html';
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
              <label>
                Ім'я
                <label className="required"></label>
                <input
                  type="text"
                  placeholder="Ім'я"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  required={!isLogin}
                />
              </label>
            )}
            <label>
              Електронна пошта
              <label className="required"></label>
              <input
                type="email"
                placeholder="Електронна пошта"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <label>
              Пароль
              <label className="required"></label>
              <input
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
            {!isLogin && (
              <p>
                Ваші особисті дані будуть використовуватися для підтримки вашого досвіду на цьому веб-сайті, щоб керувати доступом до вашого облікового запису та для інших цілей, описаних у нашій <a href="#">політиці конфіденційності</a>.
              </p>
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
