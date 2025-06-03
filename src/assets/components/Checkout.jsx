import React, {useState} from 'react'
import CheckoutHeader from './CheckoutHeader'
import { useStateValue } from './StateProvider'
import './Checkout.css'
import NavBar from './Header';
import CheckoutNav from './CheckoutNav';
import ShoppingCart from './ShoppingCart';
import Tracking from './Tracking';


function Shoppingcheckout() {
    const [activeComponent, setActiveComponent] = useState(<ShoppingCart />);
    const [activespan, setActivespan] = useState('span1');
    const [activeTitle, setactiveTitle] = useState('Shopping Cart');
    

    const renderComponent = (componentName, spanId, titleName) => {
        setActiveComponent(componentName)
        setActivespan(spanId)
        setactiveTitle(titleName)
        console.log(activeComponent)
    };
    const[{basket}] = useStateValue();
  return (
    <div className='checkout'>
        
        <NavBar triggerElementClassName='.checkout__ul' />
        <CheckoutHeader link='/' linkTitle={activeTitle} title={activeTitle}/>
        <div className='checkout__items'>
            <div className='checkout__nav' id='triggerElement'>
                <ul className='checkout__ul'>
                    <li onClick={() => {renderComponent(<ShoppingCart onButtonClicked={() => renderComponent(<CheckoutNav />, 'span2', 'shopping cart')} />, 'span1', 'shopping cart')}} className={activespan === 'span1' ? 'checkout__li active' : 'checkout__li'}>SHOPPING CART({basket.length})</li>
                    <li onClick={() => {renderComponent(<CheckoutNav />,'span2', 'checkout')}} className={activespan === 'span2' ? 'checkout__li active' : 'checkout__li'}>CHECKOUT</li>
                    <li onClick={() => {renderComponent(<Tracking /> ,'span3', 'order tracking')}} className={activespan === 'span3' ? 'checkout__li active' : 'checkout__li'}>ORDER TRACKING</li>
                </ul>
            </div>
            {activeComponent}
        </div>
        
    </div>
  )
}

export default Shoppingcheckout