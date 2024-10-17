import React, { useState } from 'react';

const ProgressBarDelivery = ({ progress }) => {
    return (
            <div 
                style={{
                    width: `${progress}%`, 
                    backgroundColor: '#6746CE', 
                    height: '0.5vw',
                    padding: '0vw',
                    transition: 'width 0.5s ease-in-out',
                    borderRadius: '1.1vw'
                }}
            />
    );
};

export default ProgressBarDelivery;
