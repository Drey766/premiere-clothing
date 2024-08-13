import React from 'react'
import './Billing.css'

function Billing() {
  return (
    <div className='billing'>
        <span className='billing__title'>BILLING DETAILS</span>
        <form className='billing__form'>
            <div className='billing__divs'>
                <label className='billing__label' for='firstName'>First Name</label>
                <input className='billing__input' type='text' id='firstName' />
            </div>
            <div className='billing__divs'>
                <label  className='billing__label' for='secondName'>Second name</label>
                <input className='billing__input' type='text' id='secondName' />
            </div>
            <div className='billing__divs'>
                <label className='billing__label' for='companyName'>Company name(optional)</label>
                <input className='billing__input' type='text' id='companyName' />
            </div>
            <div className='billing__divs'>
                <label className='billing__label' for='country'>Country / Region *</label>
                <input className='billing__input' type='text' id='country' />
            </div>
            <div className='billing__divs'>
                <label className='billing__label' for='streetAddress'>Street address *</label>
                <input className='billing__input' type='text' id='streetAddress' placeholder='House number and street name' />
                <input className='billing__input' type='text' id='aprtmentAddress' placeholder='Apartment, suite etc{optional)' />
            </div>
            <div className='billing__divs'>
                <label className='billing__label' for='Town'>Town / City *</label>
                <input className='billing__input' type='text' id='town' />
            </div>
            <div className='billing__divs'>
                <label className='billing__label' for='zip'>Postcode / ZIP *</label>
                <input className='billing__input' type='text' id='zip' />
            </div>
            <div className='billing__divs'>
                <label className='billing__label' for='phone'>Phone *</label>
                <input className='billing__input' type='number' id='phone' />
            </div>
            <div className='billing__divs'>
                <label className='billing__label' for='email'>Email address *</label>
                <input className='billing__input' type='email' id='email' />
            </div>
            
        </form>
    </div>
  )
}

export default Billing