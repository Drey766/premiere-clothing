import React from 'react'
import CheckoutHeader from '../CheckoutHeader'
import { useStateValue } from '../StateProvider'
import './Checkout.css'
import NavBar from '../Header';
import ShoppingCart from '../ShoppingCart';
import { Link } from 'react-router-dom';
import Footer from '../Footer';



function CartMain() {
    const[{basket}] = useStateValue();
  return (
    <div className='checkout'>    
        <NavBar triggerElementClassName='.checkout__ul' />
        <CheckoutHeader link='/cart' linkTitle='Cart' title='Shopping Cart'/>
        <div className='checkout__items'>
            <div className='checkout__nav' id='triggerElement'>
                <ul className='checkout__ul'>
                    <li  className='checkout__li active'>SHOPPING CART({basket.length})</li>
                    <li className='checkout__li'><Link className='checkout__liLink' to='../checkout'>CHECKOUT</Link></li>
                    <li  className='checkout__li'><Link className='checkout__liLink' to='../tracking'>ORDER TRACKING</Link></li>
                </ul>
            </div>
            <ShoppingCart />
        </div>
        <Footer />
    </div>
  )
}

export default CartMain