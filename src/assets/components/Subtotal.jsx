import React from 'react'
import './Subtotal.css'
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './reducer';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';


function Subtotal() {
  
  const[{basket}] = useStateValue();
  console.log(getBasketTotal(basket))
  console.log(basket)
  //let basketTotal = basket?.reduce((amount, item) => item.price + amount, 0)
  
  return (
    <div className='subtotal'>
        <span className='subtotal__title'>CART TOTALS</span>
        <div className='subtotal__cont'>
          <div className='subtotal__subtotal'>
            <p>Items</p> <span>{basket.length}</span>
          </div>
          <div className='subtotal__shipping'>
            <p>Shipping</p> <span>Free shipping</span>
          </div>
          <div className='subtotal__total'>
            <p>Total</p> <span><strong>${getBasketTotal(basket)}</strong></span>
          </div>
        </div>
        <Link className='subtotal__buttonLink' to='../checkout'>  <Button className='subtotal__button' >Proceed to Checkout</Button></Link>
    </div>
  )
}

export default Subtotal