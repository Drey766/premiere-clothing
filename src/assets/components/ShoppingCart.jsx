import React from 'react'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct';
import './ShoppingCart.css'
import Subtotal from './Subtotal';


function ShoppingCart({ onButtonClicked }) {
    const[{basket}] = useStateValue();
  return (
    <div className="cart__productsContainer">
        <div className="cart__productsCont">
            <div className='cart__header'>
                <div className='cart__headerCont'>
                    <span className='cart__titles' id='cart__titles1'>Product</span>
                    <span className='cart__titles' id='cart__titles2'>price</span>
                </div>
            </div>
            <div className='cart__products' id='triggerElement'>
                {basket?.length === 0 ? (
                    <div>
                        <p>You have no items in your basket. To buy one click add to basket</p>
                    </div>
                ): (
                    <div className='cart__product'>
                        {basket?.map(item => (
                            <CheckoutProduct key={item.id} id={item.id} title={item.title} image={item.image} price={item.price} rating={item.rating} />
                        ))}
                    </div>
                )}
            </div>
        </div>
        <Subtotal />
    </div>
  )
}

export default ShoppingCart