import React, { useState } from 'react';
import '../styles/Carousel.css';

const Carousel = ({ images = [] }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    
    if (!images.length) {
        return <div>No images available</div>; // Якщо немає зображень, виводимо повідомлення
    }

    const showImage = (index) => {
        if (index >= 0 && index < images.length) {
            setCurrentImageIndex(index);
        }
    };

    const handleImageClick = () => {
        const nextIndex = (currentImageIndex + 1) % images.length;
        showImage(nextIndex);
    };

    const handleButtonClick = (index) => {
        showImage(index);
    };

    return (
        <div className="carousel">
            <div className="mask-group" onClick={handleImageClick}>
                <img
                    src={images[currentImageIndex]}
                    alt={`Image ${currentImageIndex + 1}`}
                    className="mask-group-image"
                />
            </div>

            <div className="carousel-controls">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`carousel-btn ${index === currentImageIndex ? 'active' : ''}`}
                        onClick={() => handleButtonClick(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;



