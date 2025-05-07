import React, { useEffect, useState } from 'react';
import '../styles/Slider.css';

const images = [
  { src: '/slider/img1.jpeg', animation: 'fade' },
  { src: '/slider/img2.jpeg', animation: 'slide' },
  { src: '/slider/img3.jpeg', animation: 'zoom' },
  { src: '/slider/img4.jpeg', animation: 'rotate' },
  { src: '/slider/img5.jpeg', animation: 'flip' },
  { src: '/slider/img6.jpeg', animation: 'fade' }
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-wrapper position-relative overflow-hidden">
      {images.map((img, index) => (
        <img
          key={index}
          src={img.src}
          alt={`Slide ${index + 1}`}
          className={`slider-image position-absolute top-0 start-0 
                      ${index === currentIndex ? 'active ' + img.animation : ''}`}
        />
      ))}
    </div>
  );
};

export default Slider;
