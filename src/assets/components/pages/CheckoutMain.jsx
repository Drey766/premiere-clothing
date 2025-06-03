import React from 'react'
import CheckoutHeader from '../CheckoutHeader'
import { useStateValue } from '../StateProvider'
import './Checkout.css'
import NavBar from '../Header';
import CheckoutNav from '../CheckoutNav';
import { Link } from 'react-router-dom';
import Footer from '../Footer';



function CheckoutMain() {

    const[{basket}] = useStateValue();
  return (
    <div className='checkout'>
        <NavBar triggerElementClassName='.checkout__ul' />
        <CheckoutHeader link='/checkout' linkTitle='Checkout' title='Checkout'/>
        <div className='checkout__items'>
            <div className='checkout__nav' id='triggerElement'>
                <ul className='checkout__ul'>
                    <li  className='checkout__li'><Link className='checkout__liLink' to='../cart'>SHOPPING CART</Link>({basket.length})</li>
                    <li className='checkout__li active'>CHECKOUT</li>
                    <li  className='checkout__li'><Link className='checkout__liLink' to='../tracking' >ORDER TRACKING</Link></li>
                </ul>
            </div>
            <CheckoutNav />
        </div>
        <Footer />
    </div>
  )
}

export default CheckoutMain