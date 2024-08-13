import { Button } from '@mui/material'
import React from 'react'
import './Tracking.css'

function Tracking() {
  return (
    <div className='tracking'>
        <div className='tracking__cont'>
            <div className='tracking__p'>To track your order please enter your Order ID in the box below and press the "Track" button. This was given to you on your receipt and in the confirmation email you should have received.</div>
            <form className='tracking__form'>
                <div className='tracking__items'>
                    <label className='tracking__label' for='form__id'>Order Id</label>
                    <input className='tracking__input' id='form__id' type='text' placeholder='Found in order confirmation email.'/>
                </div>
                <div className='tracking__items'>
                    <label className='tracking__label' for='tracking__email'>Billing Email</label>
                    <input className='tracking__input' id='tracking__email' type='text'/>
                </div>
                <Button type='submit' className='tracking__submit'>TRACK</Button>
            </form>
        </div>
    </div>
  )
}

export default Tracking