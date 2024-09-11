// src/components/Footer.js
import React from 'react';
import '../styles/Footer.css';
import frame from '../images/Frame.svg';
import frame1 from '../images/logo_monobank.svg';
import frame2 from '../images/logo_visa.svg';
import frame3 from '../images/logo_raiffeisen_bank.svg';
import frame4 from '../images/logo_mastercard.svg';
import frame5 from '../images/logo_paypal.svg';

function Footer({ setCurrentPage }) {
  return (
    <footer className="footer">
      <div className="content-container">
        <div className="footer-description">
          <div className="logo1">
            <img src={frame} alt="Logo" />
          </div>
          <div className="shop-description">
            <span>Ваш улюблений інтернет-магазин Shopster! </span>
            <p>
              Shopster - ваш онлайн-гіпермаркет, де все під рукою! Відкрийте для себе багатий вибір товарів за привабливими цінами та насолоджуйтесь бездоганним сервісом. Замовляйте швидко та зручно, отримуйте ексклюзивні пропозиції та знижки.
            </p>
          </div>
        </div>
        <div className="links">
          <div className="column-container">
            <a href="/info" className="link">Інформація про компанію</a>
            <span className="link" data-href="/about">Про нас</span>
            <span className="link" data-href="/conditions">Умови використання сайту</span>
            <span className="link" data-href="/vacancies">Вакансії</span>
            <span className="link" data-href="/contacts">Контакти</span>
          </div>
          <div className="column-container">
            <a href="/Help" className="link">Допомога</a>
            <span className="link" data-href="/delivery">Доставка та оплата</span>
            <span className="link" data-href="/credit">Кредит</span>
            <span className="link" data-href="/guarantees">Гарантії</span>
            <span className="link" data-href="/returns">Повернення товарів</span>
            <span className="link" data-href="/service-centers">Сервісні центри</span>
          </div>
          <div className="column-container">
            <a href="/info" className="link">Сервіси</a>
            <span className="link" data-href="/about">Бонусний рахунок</span>
            <span className="link" data-href="/conditions">Подарункові сертифікати</span>
            <span className="link" data-href="/vacancies">Обмін</span>
            <span className="link" data-href="/contacts">Корпортивним клієнтам</span>
          </div>
        </div>

      </div>
      <div className="bottom-container">
        <div className="leftcolum">
          <div className="footer-links">
            < a href="/Politic" className="link">Політика конфеденційності</a>
            < a href="/track_down" className="link">Відстежити замовлення</a>
            < a href="/rules" className="link">Правила та умови</a>
          </div>
          <div className="footer-caption">
            © 2001–2024 Інтернет-магазин «Shopster™» - ТМ використовується на підставі ліцензії правовласника
          </div>
        </div>
        <div className="payment-systems">
          <div className="payment-item">
            <img src={frame2} alt="Visa" />
          </div>
          <div className="payment-item">
            <img src={frame3} alt="Raiffaisen" />
          </div>
          <div className="payment-item">
            <img src={frame4} alt="Raiffaisen" />
          </div>
          <div className="payment-item">
            <img src={frame5} alt="Raiffaisen" />
          </div>
          <div className="payment-item">
            <img src={frame1} alt="MonoBank" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


