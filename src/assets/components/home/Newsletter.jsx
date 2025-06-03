import { MailOutline } from '@mui/icons-material'
import { Button } from '@mui/material'
import React from 'react'
import './Newsletter.css'

function Newsletter() {
  return (
    <div className='newsletter'>
        <div className='newsletter__cont'>
            <div className='newsletter__divs1'>
                <div className='newsletter__cont1'>
                    <MailOutline className='newsletter__icon' />
                    <div className='newletter__text'>SIGN UP <br />FOR NEWSLETTER</div>
                </div>
            </div>
            <div className='newsletter__divs2'>Subscribe to the weekly newsletter for all the latest updates</div>
            <div className='newsletter__divs3'>
                <form className='newsletter__form'>
                    <input type='text' placeholder='Your email address' className='newsletter__input' />
                    <Button type='submit' className='newsletter__button'>SUBSCRIBE</Button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Newsletter