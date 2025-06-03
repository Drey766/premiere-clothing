import React from 'react'
import './SecondDiv.css'
import { CardGiftcard } from '@mui/icons-material'
import { LocalShipping } from '@mui/icons-material'
import { Repartition } from '@mui/icons-material'

function SecondDiv() {
    
  return (
    <div className='secondDiv'>
        <div className='secondDiv__cont' id='triggerElement' >
            <div className='secondDiv__divs'>
                <div className='seconDiv__divsCont'>
                    <LocalShipping className='secondDiv__img' />
                    <h2>Free Shipping</h2>
                    <span className='secondDiv__span'>Capped at $39 per order</span>
                </div>
            </div>

            <div className='secondDiv__divs'>
                <div className='seconDiv__divsCont'>
                    <CardGiftcard className='secondDiv__img'/>
                    <h2>Security Payments</h2>
                    <span className='secondDiv__span'>Up to 12 months installments</span>
                </div>
            </div>

            <div className='secondDiv__divs'>
                <div className='seconDiv__divsCont'>
                    <Repartition className='secondDiv__img'/>
                    <h2>14-Day Returns</h2>
                    <span className='secondDiv__span'>Shop with Confidence</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SecondDiv