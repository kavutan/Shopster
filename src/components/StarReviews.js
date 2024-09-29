
import React from 'react';
import star1 from '../images/Star1.svg';
import star2 from '../images/Star2.svg';
import '../styles/StarReviews.css';

const StarReviews = ({ rating = 3 }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    index < rating ? star1 : star2
  ));

  return (
    
      <div className="reviews1">
        {stars.map((star, index) => (
          <div className="star_reviews" key={index}>
            <img src={star} alt={`Star ${index + 1}`} width="16" height="16" />
          </div>
        ))}
         
      </div>
    
  );
};

export default StarReviews;
