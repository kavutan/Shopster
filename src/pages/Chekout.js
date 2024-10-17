import React, { useState } from 'react';
import '../styles/Chekout.css';
import ProgressBarDelivery from '../components/ProgressBarDelivery';

const Checkout = () => {
  const [progressDelivery, setprogressDelivery] = useState(50);
  const [Frame152Value, setFrame152Value] = useState(50000);
  
  
  const handleSubmit = (e) => {
    //написати форму з submit->
    /*<form onSubmit={handleSubmit}>
    {/* Поля вводу }
    <button type="submit">Надіслати</button>
    </form>*/
    e.preventDefault();
    
    // Логіка для обробки замовлення
    const paymentData = {
      
    };
    
    console.log('Payment Info:', paymentData);
    
    // Зазвичай тут ви надсилаєте запит до сервера для підтвердження оплати
    // Для простоти прикладу просто встановлюємо флаг про успішну оплату
    
  };
  
  return (
    <div className="checkout_container">
     <div className="left_column">
        <div className="widget_Freedelivery">
            <div className='Message'>
                <div className='Frame-152'>
                    <p className='p_Text' >Для безкоштовної доставки вам залишилось додати товару ще на     </p>                 
                    <p  className='p_Value'>{`${Frame152Value}₴`}</p >
                </div>
                </div>
                <div className='Frame-151'>
                    <ProgressBarDelivery progress={progressDelivery} />
                </div>     
        </div>
        <div className='Title'>
            <p className='Title_text'>Оформлення замовлення</p>
        </div>
        <div className='info'>
            <div className='personalInformation'>
                <div className='pInfoText'>1.Персональна інформація</div>
                <div className='contentPart'>
                    <div className='leftColumn'>
                        <div className='firstName'>
                            <p className='Frame-143'>Імя<span className='spanLabel'>*</span></p>
                            <input className='Frame-142' type='text' placeholder='Імя'></input>
                        </div>
                        <div className='mobilPhone'>
                        <p className='Frame-143'>Мобільний телефон<span className='spanLabel'>*</span></p>
                        <input className='Frame-142' type='number' placeholder='Мобільний телефон'></input>
                        </div>
                    </div>
                    <div className='rightColumn'>
                    <div className='lastName'>
                            <p className='Frame-143'>Прізвище<span className='spanLabel'>*</span></p>
                            <input className='Frame-142' type='text' placeholder='Прізвище'></input>
                        </div>
                        <div className='email'>
                        <p className='Frame-143'>Електронна пошта<span className='spanLabel'>*</span></p>
                        <input className='Frame-142' type='text' placeholder='Електронна пошта'></input>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </div>
     <div className="checkout_form2">

     </div>
    </div>
  );
};

export default Checkout;
