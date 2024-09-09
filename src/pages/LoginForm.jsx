import React, { useState } from 'react';
import '../styles/LoginForm.css';
import { useNavigate } from 'react-router-dom';

const REGISTER_URL = 'http://localhost:5123/gateway/users';
const LOGIN_URL = 'http://localhost:5123/gateway/autorizes';

const LoginForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [touched, setTouched] = useState({
    userName: false,
    email: false,
    password: false,
  });
  const [errors, setErrors] = useState({
    userName: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (field) => (e) => {
    switch (field) {
      case 'userName':
        setUserName(e.target.value);
        break;
      case 'email':
        setEmail(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      default:
        break;
    }
  };

  const handleBlur = (field) => () => {
    setTouched((prevTouched) => ({ ...prevTouched, [field]: true }));
  };

  const handleTabClick = (isLoginTab) => () => {
    setIsLogin(isLoginTab);

    // Очищення полів та помилок
    setUserName('');
    setEmail('');
    setPassword('');
    setTouched({
      userName: false,
      email: false,
      password: false,
    });
    setErrors({
      userName: '',
      email: '',
      password: '',
    });
  };

  const validate = () => {
    const newErrors = {};

    // Завжди перевіряємо всі поля під час надсилання
    if (!isLogin) {
      if (!userName.trim()) {
        newErrors.userName = 'Заповніть це поле!';
      } else if (userName.trim() && !/^[a-zA-Zа-яА-ЯіІєЄїЇ\s]+$/.test(userName)) {
        newErrors.userName = 'Ім\'я може містити тільки літери та пробіли!';
      }
    }

    if (!email.trim()) {
      newErrors.email = 'Заповніть це поле!';
    } else if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Невірний формат електронної пошти!';
    }

    if (!password.trim()) {
      newErrors.password = 'Заповніть це поле!';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Перевіряємо всі поля під час надсилання
    if (!validate()) {
      return; // Перешкоджаємо надсиланню форми, якщо валідація не пройшла
    }

    const userData = {
      Email: email,
      PasswordHash: password,
      RoleId: 2,
      Phone: '',
      Address: '',
      CreatedAt: new Date().toISOString(),
      LastLogin: null,
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
      console.log(data);
      if (isLogin) {
        sessionStorage.setItem('tokenKey', JSON.stringify(data));
        alert('Вхід успішний!');
        navigate('/');
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
            onClick={handleTabClick(true)}
          >
            Увійти
          </button>
          <button
            className={`register-button ${!isLogin ? 'active' : ''}`}
            onClick={handleTabClick(false)}
          >
            Створити обліковий запис
          </button>
        </div>
        <div className="login-form">
          <form noValidate onSubmit={handleSubmit}>
            {!isLogin && (
              <label htmlFor="username">
                Ім'я
                <span className={`required ${errors.userName ? 'show' : ''}`}>*</span>
                <input
                  type="text"
                  id="username"
                  placeholder="Ім'я"
                  value={userName}
                  onChange={handleInputChange('userName')}
                  onBlur={handleBlur('userName')}
                />
                {errors.userName && (
                  <span className="error">{errors.userName}</span>
                )}
              </label>
            )}
            <label htmlFor="email">
              Електронна пошта
              <span className={`required ${errors.email ? 'show' : ''}`}>*</span>
              <input
                type="email"
                id="email"
                placeholder="Електронна пошта"
                value={email}
                onChange={handleInputChange('email')}
                onBlur={handleBlur('email')}
              />
              {errors.email && (
                <span className="error">{errors.email}</span>
              )}
            </label>
            <label htmlFor="password">
              Пароль
              <span className={`required ${errors.password ? 'show' : ''}`}>*</span>
              <div className="password-container">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  placeholder="Пароль"
                  value={password}
                  onChange={handleInputChange('password')}
                  onBlur={handleBlur('password')}
                />
               <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6" width="24" height="24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6" width="24" height="24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                  )}
                </button>

              </div>
              {errors.password && (
                <span className="error">{errors.password}</span>
              )}
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



