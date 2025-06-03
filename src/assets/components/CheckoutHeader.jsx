import React from 'react'
import { Link } from 'react-router-dom'
import './CheckoutHeader.css'
import { KeyboardArrowRight } from '@mui/icons-material'

function CheckoutHeader({title, link, linkTitle}) {
    const linker = `${link}`
  return (
    <div className='checkoutHeader'>
        <div className='checkoutHeader__cont'>
            <span className='checkoutHeader__title'>{title}</span>
            <div className='checkoutHeader__links'>
<<<<<<< HEAD
                <Link to='/' className='checkoutHeader__link'>Home</Link>  <KeyboardArrowRight className='checkoutHeader__arrow' />  <Link  to={`..${linker}`} className='checkoutHeader__link'>{linkTitle}</Link>
=======
                <Link to='/' className='checkoutHeader__link'>Home</Link>  <KeyboardArrowRight />  <Link  to={`..${linker}`} className='checkoutHeader__link'>{linkTitle}</Link>
>>>>>>> 9716151989078967d3292c775c0f6ae8fe33ce01
            </div>
        </div>
        
    </div>
  )
}

export default CheckoutHeader