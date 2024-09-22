import React, { useState } from 'react';
import '../styles/Down.css'; // Підключіть CSS файл для стилів
import '../styles/MyOrders.css'; // Підключіть CSS файл для стилів
import btnDropDown from '../images/VectorStrokeOrder.svg';


const Down = ({ isShowDown, setIsShowDown, setGap }) => {
  // Створюємо стан для активного поля
  const [activeIndex, setActiveIndex] = useState(null);

  // Функція для обробки кліків і зміни активного поля
  const handleClick = (index) => {
    setActiveIndex(index);
  };
  const toggleOrder = () => {
    setIsShowDown(!isShowDown);
    setGap('42.43vw');
  };

  return (
    
    <div className="frame-215">
          <div  className="frame-204">
        <span className='Text'>{isShowDown ? 'Оберіть опцію' : 'За весь час'}</span>
            <button className='arrow-down-24'>
            <img onClick={toggleOrder}
            src={btnDropDown}
            alt="DropDown" 
            className="stroke" 
          />
            </button>
      </div>
      <div className='down-container'>
      {['Title 1', 'Title 2', 'Title 3', 'Title 4'].map((title, index) => (
        <div 
          key={index}
          className={`down-item ${activeIndex === index ? 'active' : ''}`}
          onClick={() => handleClick(index)}
        >
          {title}
        </div>
      ))}
      </div>
    </div>
  );
};

export default Down;
