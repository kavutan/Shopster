import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(60 * 60 * 60); // 60 годин у секундах

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          return 60 * 60 * 60; // Перезапуск з 60 годин
        }
        return prevTime - 1; // Зменшуємо час
      });
    }, 1000); // Оновлення щосекунди

    return () => clearInterval(intervalId); // Очищення інтервалу при завершенні
  }, []);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${String(hours).padStart(2, "0")} : ${String(minutes).padStart(2, "0")} : ${String(seconds).padStart(2, "0")}`;
  };

  return <div style={{ fontSize: '24px', fontWeight: 'bold' }}>{formatTime(timeLeft)}</div>;
};

export default CountdownTimer;
