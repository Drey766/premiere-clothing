import React from 'react'
import './Home.css'
import FirstDiv from '../home/FirstDiv'
import Highlights from '../home/Highlights'
import Catalogue from '../home/Catalogue'
import SecondDiv from '../home/SecondDiv'
import Newsletter from '../home/Newsletter'
import Misc from '../home/Misc'
import paymentImg from '../../img/logo/paymet.png.webp'
import { Link} from 'react-router-dom';
import { Button } from '@mui/material'



function Home() {
  
  return (
    <div className='home'>
        <FirstDiv />
        <SecondDiv />
        <Highlights />
        <Catalogue />
        <span className='viewMore' >
          <Link to={'./shop'}>
            <Button className='viewMore__button'>View More</Button>
          </Link>
        </span>
        <Newsletter />
        <Misc />
        <div className='footer__copyright'>
            <div className='footer__copyrightCont'>
                <span className='footer__copyrightText'>Premiere @copyright 2023</span>
                <img src={paymentImg} alt='payment' className='footer__payment' />
            </div>
        </div>
        
    </div>
  )
}

export default Home
