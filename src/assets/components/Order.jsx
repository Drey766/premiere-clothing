import React from 'react'
import { useStateValue } from './StateProvider'
import './Order.css'
import { getBasketTotal } from './reducer';
import { Button } from '@mui/material';


function Order() {
  const [{basket}, dispatch] = useStateValue();

  return (
    <div className="order">
      <span className='order__title'>YOUR ORDER</span>
      <div className="order__container">
        <div className='order__cont'>
          <div className='order__nav'>
            <span className='order__navOptions' id='order__navOptions1'>PRODUCT</span>
            <span className='order__navOptions' id='order__navOptions2'>PRICE</span>
          </div>
          <div className='order__products'>
              {basket?.length === 0 ? (
                  <div className='order__none'>
                      <p>You have no items in your basket. To buy one click add to basket</p>
                  </div>
              ): (
                  <div className='order__product'>
                      {basket?.map(item => (
                          <div class="orderProduct__cont" key={item.id}>
                            <span className='orderProduct__title'>{item.title}</span>
                            <span className='orderProduct__price'>
                                <small>$</small><strong>{item.price}</strong>
                            </span>
                          </div>
                      ))}
                  </div>
              )}
          </div>
          <div className='order__shipping'>
            <div className='shipping__cont'>
              <span className='shipping__ship'>Shipping</span>
              <div className='shipping__shipping'>Free Shipping</div>
            </div>
          </div>
          <div className='order__total'>
            <p>Total</p> <span><strong>${getBasketTotal(basket)}</strong></span>
          </div>
        </div>
        <div className='order2'>
          <ul className='order2__ul'>
            <li className='order2__li'>Direct bank transfer </li>
            <li className='order2__li'>Check payments </li>
            <li className='order2__li'>Cash on delivery </li>
            <li className='order2__li'>PayPal</li>
          </ul>
          <Button className='order2__buton'>Place order</Button>
        </div>
      </div>
      
    </div>
  )
}

export default Order