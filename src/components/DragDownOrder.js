import React, { useState } from 'react';
import btnDropDown from '../images/VectorStrokeOrder.svg';
import '../styles/MyOrders.css';

const DragDownOrder = ({ isShowDown, setIsShowDown, setGap }) => {
  // Створюємо стан для управління відображенням замовлення
  //const [isOpen, setIsOpen] = useState(false);

  // Функція для перемикання відкритого/закритого стану замовлення
  const toggleOrder = () => {
    setIsShowDown(!isShowDown);
    setGap('25vw');
  };

  return (
    <div className='frame-214'>
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
      </div>
  );
};

export default DragDownOrder;
