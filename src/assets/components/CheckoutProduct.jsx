import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'
import { Button } from '@mui/material';
import { Close } from '@mui/icons-material';

function CheckoutProduct({id, title, price, image, rating}) {
    const [{basket}, dispatch] = useStateValue();
    const removeFromBasket= () => {
        //remove from basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

  return (
    <div className='checkoutProduct'>
        <Button onClick={removeFromBasket} className='checkoutProduct__button'><Close /></Button>
        <div class="checkoutProduct__cont">
            <img src={image} alt='' className='checkoutProduct__image' />
            <div className='checkoutProduct__info' >
                <p className='checkoutProduct__title'>{title}</p>
                <p className='checkoutProduct__price'>
                    <small>$</small><strong>{price}</strong>
                </p>
                {/*  <div className='checkoutProduct__rating'>
                    {Array(rating).fill().map((_) => (
                        <p>*</p>
                    ))}
                </div> */}
                
            </div>
        </div>
    </div>
  )
}

export default CheckoutProduct