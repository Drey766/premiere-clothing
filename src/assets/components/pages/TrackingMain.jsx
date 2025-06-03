import React from 'react'
import CheckoutHeader from '../CheckoutHeader'
import { useStateValue } from '../StateProvider'
import './Checkout.css'
import NavBar from '../Header';
import Tracking from '../Tracking';
import { Link } from 'react-router-dom';
import Footer from '../Footer';



function TrackingMain() {

    const[{basket}] = useStateValue();
  return (
    <div className='checkout'>
        <NavBar triggerElementClassName='.checkout__ul' />
        <CheckoutHeader link='/tracking' linkTitle='Tracking' title='Order Tracking'/>
        <div className='checkout__items'>
            <div className='checkout__nav' id='triggerElement'>
                <ul className='checkout__ul'>
                    <li  className='checkout__li'><Link className='checkout__liLink' to='../cart'>SHOPPING CART</Link>({basket.length})</li>
                    <li className='checkout__li'><Link className='checkout__liLink' to='../checkout'>CHECKOUT</Link></li>
                    <li  className='checkout__li active'>ORDER TRACKING</li>
                </ul>
            </div>
            <Tracking />
        </div>
        <Footer />
    </div>
  )
}

export default TrackingMain