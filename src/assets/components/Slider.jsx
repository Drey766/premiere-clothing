import React, { useState, useRef, useEffect } from 'react';
import './Slider.css'; // Make sure to adjust the path to your CSS file
import img1 from '../img/sliderman.png'
import img2 from '../img/1-copy.png'
import img3 from '../img/2.png'
import FirstSlide from './FirstSlide';
import ThirdSlide from './ThirdSlide';
import SecondSlide from './SecondSlide';

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    <FirstSlide />,
    <SecondSlide /> ,
    <ThirdSlide />
  ];

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  };
  const buttonRef = useRef(null);

  const Autopress = (elem) => {
    useEffect(() => {
      const interval = setInterval(() => {
        elem.current.click();
      }, 5000);
      return () => {
        clearInterval(interval)
      }
    }, [])
    
  }

  Autopress(buttonRef)

  return (
    <div className="carousel">
      <button className="carousel__button carousel__button--left" onClick={handlePrevClick}>prev</button>
      <div className="carousel__track-container">
        <ul className="carousel__track">
          {slides.map((slide, index) => (
            <li
              key={index}
              className={`carousel__slide ${index === currentIndex ? 'current-slide' : ''}`}
              style={{
                transform: `translateX(-${currentIndex * 100}%)`, transition: 'all 0.8s ease'
              }}
            >
              {slide}
            </li>
          ))}
        </ul>
      </div>
      <button ref={buttonRef} className="carousel__button carousel__button--right" onClick={handleNextClick}>next</button>

      <div className="carousel__nav">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`carousel__indicator ${index === currentIndex ? 'current-slide' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
