import React, { useState, useEffect } from 'react';
import './Product.css';
import { Button } from '@mui/material';
import { useStateValue } from './StateProvider';
import { Link } from 'react-router-dom';




function Product({ id, title, image, image2, price, rating, extraImages, brand, color}) {
  const [{ basket }, dispatch] = useStateValue();
  const [isAdded, setIsAdded] = useState(false);
  const isInBasket = basket.some(item => item.id === id);

  useEffect(() => {
    if(isInBasket) {
      setIsAdded(true)
    } else {
      setIsAdded(false)
    }
  }, [isInBasket])

  const addToBasket = () => {
    if (isInBasket) {
      // If the item is already in the basket, remove it
      dispatch({
        type: 'REMOVE_FROM_BASKET',
        id: id,
      });
      setIsAdded(false);
    } else {
      // If the item is not in the basket, add it
      dispatch({
        type: 'ADD_TO_BASKET',
        item: {
          id: id,
          title: title,
          image: image,
          image2: image2,
          price: price,
          rating: rating,
          extraImages: extraImages,
          brand: brand,
          color: color
        },
      });
      setIsAdded(true);
    }

    // Toggle the isAdded state
  };

  return (
    
      
        <div
          className='product'
          key={id}
          
          
        >
          <Link to='../product' className='product__imgDivLink' state={{
            product: {
              id: id,
              title: title,
              image: image,
              image2: image2,
              price: price,
              rating: rating,
              extraImages: extraImages,
              brand: brand,
              color: color

        }
      }} >
            <div className='product__imgDiv'>
              <img src={image} className='product__img1' alt={title} />
              <img src={image2} className='product__img2' alt={title} />
            </div>
          </Link>
          <div className='product__text'>
            <div className='product__text1'>
              <Link className='h4__cont' to='../product' state={{
                product: {
                  id: id,
                  title: title,
                  image: image,
                  image2: image2,
                  price: price,
                  rating: rating,
                  extraImages: extraImages,
                  brand: brand,
                  color: color
                }
              }} >
                <h4>{title}</h4>
              </Link>
              <span className='product__price'>${price}</span>
            </div>
            <Button className='product__addButton' onClick={addToBasket}>
              {isAdded ? 'Added' : 'Add to Cart'}
            </Button>
          </div>
        </div>
  );
}

export default Product;
