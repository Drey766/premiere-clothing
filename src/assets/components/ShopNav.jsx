import React from 'react'

function ShopNav(imgSrc, shopNavtitle) {
  return (
    <div className='shopnav'>
        <img className='shopnav__img' src={imgSrc} />
        <span className='shopnav__span'>{shopNavtitle}</span>
    </div>
  )
}

export default ShopNav