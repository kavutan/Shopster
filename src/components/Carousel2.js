import React, { useState } from 'react';
import '../styles/Carousel2.css';
import image1 from '../images/1-1.svg';
import image2 from '../images/1-2.svg';
import image3 from '../images/1-3.svg';
import image4 from '../images/1-4.svg';

const Carousel2 = () => {
    const images = [image1, image2, image3, image4];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
        <div className="carousel2">
          
            <div className="mask-group2"onClick={handleImageClick}>
                <img
                    src={images[currentImageIndex]}
                    alt={`Image ${currentImageIndex + 1}`}
                    className="mask-group-image2"
                />
            </div>

            <div className="carousel-controls2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`carousel-btn2 ${index === currentImageIndex ? 'active' : ''}`}
                        onClick={() => handleButtonClick(index)}
                    />
                ))}
            </div>

        </div>
    );
};

export default Carousel2;



