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
                <Link to='/' className='checkoutHeader__link'>Home</Link>  <KeyboardArrowRight className='checkoutHeader__arrow' />  <Link  to={`..${linker}`} className='checkoutHeader__link'>{linkTitle}</Link>
            </div>
        </div>
        
    </div>
  )
}

export default CheckoutHeader