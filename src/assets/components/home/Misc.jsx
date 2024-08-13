import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material'
import React from 'react'
import './Misc.css'
import logo from '../../img/logo/premiere-high-resolution-logo-black-transparent.png'

function Misc() {
  return (
    <div className='misc'>
        <div className='misc__divs1'>
            <img src={logo} alt='logo' className='logo' />
        </div>
        <div className='misc__divs2'>
            <ul className='misc__ul'>
                <li className='misc__li'>Store Locator</li>
                <li className='misc__li' id='misc__li2'>Opening Hours</li>
                <li className='misc__li'>Privacy policy</li>
            </ul>
        </div>
        <div className='misc__divs3'>
            <div className='misc__iconsDiv'>
                <Twitter className='misc__icons' />
                <Instagram className='misc__icons' />
                <Facebook className='misc__icons' />
                <LinkedIn className='misc__icons' />
            </div>
        </div>
    </div>
  )
}

export default Misc