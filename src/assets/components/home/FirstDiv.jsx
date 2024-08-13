import React, { useEffect, useState, useRef } from 'react';
import './FirstDiv.css';
import 'react-multi-carousel/lib/styles.css';
import FirstSlide from './NewSLide';
import img1 from '../../img/slider5-5.jpg';
import img2 from '../../img/slider5-4.jpg';
import img3 from '../../img/slider5-2.jpg';

function FirstDiv() {
  const [activeComponent, setActiveComponent] = useState('FirstSlide');
  const [activespan, setActivespan] = useState('span1');
  
  const spansRef = useRef([]);

  const componentMap = {
    'FirstSlide': (
      <FirstSlide 
        key="first" 
        backgroundImage={img1} 
        firstWord='EFFORTLESSLY' 
        secondWord='FORTABLE' 
        classname2={activeComponent === 'FirstSlide' ? 'activeSlide' : ''} 
        classname3={activeComponent === 'FirstSlide' ? 'activeDiv' : ''} 
      />
    ),
    'SecondSlide': (
      <FirstSlide 
        key="second" 
        backgroundImage={img2} 
        firstWord='SALE UP TO' 
        secondWord='20% OFF' 
        classname2={activeComponent === 'SecondSlide' ? 'activeSlide' : ''} 
        classname3={activeComponent === 'SecondSlide' ? 'activeDiv' : ''} 
      />
    ),
    'ThirdSlide': (
      <FirstSlide 
        key="third" 
        backgroundImage={img3} 
        firstWord='FIND YOUR' 
        secondWord='STYLE' 
        classname2={activeComponent === 'ThirdSlide' ? 'activeSlide' : ''} 
        classname3={activeComponent === 'ThirdSlide' ? 'activeDiv' : ''} 
      />
    ),
  };

  const renderComponent = (componentName, spanId) => {
    setActiveComponent(componentName);
    setActivespan(spanId);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const activeIndex = parseInt(activespan.slice(-1), 10);
      const nextIndex = (activeIndex % 3) + 1;
      const nextSpanId = `span${nextIndex}`;
      spansRef.current[nextIndex - 1].click();
    }, 5000);

    return () => clearInterval(intervalId);
  }, [activespan, activeComponent]);

  return (
    <div className='firstDiv'>
      <div className='firstDiv__nav'>
        <span 
          ref={(el) => (spansRef.current[0] = el)} 
          onClick={() => renderComponent('FirstSlide', 'span1')} 
          className={activespan === 'span1' ? 'firstDiv__bullet active' : 'firstDiv__bullet'}
        ></span>
        <span 
          ref={(el) => (spansRef.current[1] = el)} 
          onClick={() => renderComponent('SecondSlide', 'span2')} 
          className={activespan === 'span2' ? 'firstDiv__bullet active' : 'firstDiv__bullet'}
        ></span>
        <span 
          ref={(el) => (spansRef.current[2] = el)} 
          onClick={() => renderComponent('ThirdSlide', 'span3')} 
          className={activespan === 'span3' ? 'firstDiv__bullet active' : 'firstDiv__bullet'}
        ></span>
      </div>
      <div className='firstDiv__carousel'>
        {componentMap[activeComponent]}
      </div>
    </div>
  );
}

export default FirstDiv;
