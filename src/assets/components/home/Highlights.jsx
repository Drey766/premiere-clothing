import React from 'react'
import './Highlights.css'
import highImg1 from '../../img/img5-5.jpg.webp'
import highImg2 from '../../img/img5-6.jpg.webp'
import highImg3 from '../../img/img5-7.jpg.webp'
import highImg4 from '../../img/img5-8.jpg.webp'
import { Link } from 'react-router-dom'

function Highlights() {

  return (
    <div className='highlights' >
      <div className='highlights__container'>
        <div className='highlights__conts'>
          <div className='highlight__divs1' id='highlights__divs1'>
            <img className='highlights__img' src={highImg1} alt='' />
            <div className='highlights__text' id='highlights__text'>
              <h3 className='h3'>Men's shoes<br /> classics</h3>
              <span className='highlights__span'><Link to='/shop' state={{product: {category: 'studentJson', title: 'Shoes'}}} className='highlights__spanLink' id='highlights__spanLink1' >Shop now</Link></span>
            </div>
          </div>
          <div className='highlight__divs2'>
            <img className='highlights__img' src={highImg3} alt='' />
            <div className='highlights__text'>
              <h3 className='h3'>Campus <br /> Style</h3>
              <span className='highlights__span'><Link to='/shop' state={{product: {category: 'campusJson', title: 'Campus Style'}}} className='highlights__spanLink'>Shop now</Link></span>
            </div>
          </div>
        </div>

        <div className='highlights__conts'>
          <div className='highlight__divs2'>
            <img className='highlights__img' src={highImg2} alt='' />
            <div className='highlights__text'>
              <h3 className='h3'>Spring <br />collection</h3>
              <span className='highlights__span'><Link to='/shop' state={{product: {category: 'springjson', title: 'Spring Collection'}}} className='highlights__spanLink'>Shop now</Link></span>
            </div>
          </div>
          <div className='highlight__divs1'>
            <img className='highlights__img' src={highImg4} alt='' />
            <div className='highlights__text'>
              <h3 className='h3'>Fashion <br /> Discovery</h3>
              <span className='highlights__span'><Link to='/shop' state={{product: {category: 'womenNewjson', title: 'Fashion Discovery'}}} className='highlights__spanLink'>Shop now</Link></span>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Highlights