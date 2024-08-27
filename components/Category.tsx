"use client"

import React, { useState, useEffect } from 'react';

const CustomProgressBar = () => {
    const [progress, setProgress] = useState(0);
  
    useEffect(() => {
      const timer = setInterval(() => {
        setProgress((prevProgress) => (prevProgress < 100 ? prevProgress + 10 : 100));
      }, 1000);
  
      return () => clearInterval(timer);
    }, []);
  
    return (
      <div style={{
        width: '300px',        // Largura fixa
        height: '30px',
        backgroundColor: '#e0e0e0',
        borderRadius: '5px',
        overflow: 'hidden',
        margin: '20px auto',
        position: 'relative'   // Necessário para posicionar o texto no centro
      }}>
        <div
          style={{
            width: `${progress}%`,
            height: '100%',
            backgroundColor: '#4caf50',
            transition: 'width 0.5s ease-in-out',
          }}
        />
        <span
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            fontWeight: 'bold',
          }}
        >
          {progress}%
        </span>
      </div>
    );
  };
  


export default CustomProgressBar;
