import React from 'react';
import { animate, motion } from 'framer-motion';
import './FirstSlide.css';
import { Button } from '@mui/material';
import { Facebook, Instagram, Twitter, YouTube } from '@mui/icons-material';
import NavBar from '../Header';
import { Link } from 'react-router-dom';

function FirstSlide({ classname2, classname3, firstWord, secondWord, backgroundImage }) {
  const letterVariants = {
    initial: { opacity: 0, y: 80 },
    animate: { opacity: 1, y: 0 },
  };

  const slideLeftVariants = {
    initial: { x: 80, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  };

  const slideRightVariants = {
    initial: { x: -50, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  };

  const emergeReverseVariants = {
    initial: { y: -80, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const maxEmergeVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    
  };

  const imageVariants = {
    initial: {opacity: 0},
    animate: {opacity: 1},
    exit: {opacity: 0}
  }

  return (
    <div 
      className={`firstSlide ${classname2}`}
      
    >
      <NavBar triggerElementClassName='.secondDiv' />
      <motion.img 
        src={backgroundImage} 
        alt="backgroundImg" 
        className='backgroundImg'
        variants={imageVariants}
        initial= 'initial'
        animate= 'animate'
        exit= 'exit'
        transition={{ duration: 1, ease: 'easeOut' }}
         />
      <div className="firstSlide__cont">
        <div className='firstSlide__sides'>
          <div className={`firstSlide__sidesP`}>
            <motion.div 
              className={`firstSlide__sidesLine2 ${classname3}`}
              variants={slideRightVariants}
              initial="initial"
              animate="animate"
              transition={{ duration: 1, ease: 'easeOut' }}
            ></motion.div>
            <div className='firstSlide__sidesPtext'>
              {['2', '0', '2', '3', ' ', 'E', 'D', 'I', 'T', 'I', 'O', 'N'].map((char, index) => (
                <motion.span 
                  key={index}
                  className={`firstSlide__sidesLetter ${classname3}`}
                  variants={slideLeftVariants}
                  initial="initial"
                  animate="animate"
                  transition={{ duration: 1, delay: index * 0.1 }}
                >
                  {char}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
        <div className='firstSlide__center'>
          <div className='firstSlide__textDiv'>
            <div className='firstSlide__centerDiv'>
              <motion.div 
                className={`firstSlide__line ${classname3}`}
                variants={emergeReverseVariants}
                initial="initial"
                animate="animate"
                transition={{ duration: 1 }}
              ></motion.div>
              <motion.h1 
                className={`firstSlide__hypebes ${classname3}`}
                variants={slideLeftVariants}
                initial="initial"
                animate="animate"
                transition={{ duration: 1 }}
              >
                ASOS <br /> COLLECTION 2023
              </motion.h1>
            </div>
            <p className={`firstSlide__p`}>
              <span className='firstSlide__p1'>
                {firstWord.split("").map((char, index) => (
                  <motion.span 
                    key={index} 
                    className={`firstSlide__pLetter ${classname3}`}
                    variants={letterVariants}
                    initial="initial"
                    animate="animate"
                    transition={{ duration: 1, delay: index * 0.1 }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </span>
              <span className='firstSlide__p2'>
                {secondWord.split("").map((char, index) => (
                  <motion.span 
                    key={index} 
                    className={`firstSlide__p2Letters ${classname3}`}
                    variants={letterVariants}
                    initial="initial"
                    animate="animate"
                    transition={{ duration: 1, delay: (firstWord.length + index) * 0.1 }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </span>
            </p>
            <motion.div
              variants={maxEmergeVariants}
              initial="initial"
              animate="animate"
              transition={{ duration: 1 }}
            >
              <Button 
                className={`firstSlide__button ${classname3}`}
                component={motion.div}
                whileHover={{ scale: 1.05, backgroundColor: '#ff4545' }}
              >
                <Link to='/shop' className='firstSlide__buttonLink'>SHOP NOW</Link>
              </Button>
            </motion.div>
          </div>
        </div>
        <div className='firstSlide__sides'>
          <div className={`firstSlide__sidesCont`}>
            <motion.div 
              className={`firstSlide__sidesICons`}
              variants={maxEmergeVariants}
              initial="initial"
              animate="animate"
              transition={{ duration: 1 }}
            >
              {[Twitter, Instagram, Facebook, YouTube].map((Icon, index) => (
                <motion.div key={index} whileHover={{ scale: 1.2 }}>
                  <Icon className={`firstSlide__icons ${classname3}`} />
                </motion.div>
              ))}
            </motion.div>
            <motion.div 
              className={`firstSlide__sidesLine ${classname3}`}
              variants={emergeReverseVariants}
              initial="initial"
              animate="animate"
              transition={{ duration: 1 }}
            ></motion.div>
            <div className='firstSlide__sidesSpecial'>
              {'SPECIAL EDITION'.split('').map((char, index) => (
                <motion.span 
                  key={index}
                  className={`firstSlide__sidesSpecialLetters ${classname3}`}
                  variants={slideLeftVariants}
                  initial="initial"
                  animate="animate"
                  transition={{ duration: 1, delay: index * 0.1 }}
                >
                  {char}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstSlide;
