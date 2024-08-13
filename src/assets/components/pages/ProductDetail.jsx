import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { Button } from '@mui/material';
import './ProductDetail.css';
import NavBar from '../Header';
import CheckoutHeader from '../CheckoutHeader';
import { KeyboardArrowRight, LocalMall } from '@mui/icons-material';
import Footer from '../Footer';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Product from '../Product';
import hoodiesJson from '../responses/hoodies.json';

function ProductDetail() {
  const [{ basket }, dispatch] = useStateValue();
  const [isAdded, setIsAdded] = useState(false);

  // Use the useLocation hook to access the location object
  const location = useLocation();

  // Access the state from the location object
  const { state } = location;

  // Check if state is defined and extract product data
  const productData = state && state.product;
  const hoodies = hoodiesJson.products;

  const isInBasket = basket.some(item => item.id === productData.id);
  useEffect(() => {
    if (isInBasket) {
      setIsAdded(true);
    } else {
      setIsAdded(false);
    }
  }, [isInBasket]);

  // Scroll to the top of the page and click the first image when the state changes
  useEffect(() => {
    window.scrollTo(0, 0);
    // Use a ref to access the first image element
    if (firstImageRef.current) {
      firstImageRef.current.click();
    }
  }, [state]);

  const addToBasket = () => {
    if (isInBasket) {
      // If the item is already in the basket, remove it
      dispatch({
        type: 'REMOVE_FROM_BASKET',
        id: productData.id,
      });

      // Set isAdded to false
      setIsAdded(false);
    } else {
      // If the item is not in the basket, add it
      dispatch({
        type: 'ADD_TO_BASKET',
        item: {
          id: productData.id,
          title: productData.title,
          image: productData.image,
          price: productData.price,
          rating: productData.rating,
          extraImages: productData.extraImages,
        },
      });

      // Set isAdded to true
      setIsAdded(true);
    }
  };

  const [centerImageSrc, setCenterImageSrc] = useState(productData.image);
  const imageSources = [
    productData.image,
    `https://${productData.extraImages[0]}`,
    `https://${productData.extraImages[1]}`,
    `https://${productData.extraImages[2]}`,
  ];

  // Create a ref to hold the reference to the first image element
  const firstImageRef = useRef(null);

  const changeCenterImage = (index) => {
    // Set the centerImageSrc to the clicked image's source
    setCenterImageSrc(imageSources[index]);
  };

  if (!productData) {
    // Handle the case when state or product data is not available
    return <div>No product data available.</div>;
  }

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  // Now you can use productData to render the details of the individual product
  return (
    <div className='productDetail'>
      {/* Add more details as needed */}
      <NavBar triggerElement='.product__addButton' />
      <CheckoutHeader title='Product' link='/' linkTitle='product' />
      <div className='productDetail__nav'>
        <div className='productDetail__navCont'>
          <Link to='/' className='productDetail__navLink'>
            Home
          </Link>{' '}
          <KeyboardArrowRight />{' '}
          <Link className='productDetail__navLink' to='../shop'>
            Shop
          </Link>{' '}
          <KeyboardArrowRight /> {productData.title}
        </div>
      </div>
      <div className='productDetail__cont'>
        <div className='productDetail__containers1'>
          <div className='productDetail__containers2'>
            <img
              src={`${centerImageSrc || productData.image}`}
              className='productDetail__centerImage'
              alt='Product Image Main'
            />
          </div>
          <div className='productDetail__imagesCont'>
            {imageSources.map((image, index) => (
              <img
                key={index}
                src={`${image}`}
                className='productDetail__images'
                alt={`Product ${index + 1}`}
                onClick={() => changeCenterImage(index)}
                // Assign the ref to the first image element
                ref={index === 0 ? firstImageRef : null}
              />
            ))}
          </div>
        </div>

        <div className='productDetail__containers3'>
          <div className='productDetail__containers3Cont'>
            <div className='productDetail__info1'>
              <span className='productDetail__title'>{productData.title}</span>
              <p className='productDetail__p'>${productData.price}</p>
            </div>
            <div className='productDetail__info2'>
              <span className='productDetail__brand'>Brand: {productData.brand}</span>
              <p className='productDetail__p2'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </p>
              <span className='productDetail__color'>Color: {productData.color}</span>
              <Button className='productDetail__addButton' id='triggerElement' onClick={addToBasket}>
                <LocalMall /> {isAdded ? ' Added' : ' Add to Cart'}
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className='similarProducts'>
        <span className='similar__title'>You might also like:</span>
        <Carousel
          containerClass='productDetail__carousel'
          itemClass='productDetail__carouselItem'
          responsive={responsive}
          showDots={false}
          swipeable={true}
          draggable={true}
          autoPlay={true}
          autoPlaySpeed={3000}
        >
          {hoodies.map(product => (
            <Product
              key={product.id}
              id={product.id}
              title={product.name}
              image={`https://${product.imageUrl}`}
              image2={`https://${product.additionalImageUrls[0]}`}
              price={product.price.current.value}
              rating={product.productCode}
              extraImages={product.additionalImageUrls}
              brand={product.brandName}
              color={product.colour}
            />
          ))}
        </Carousel>
      </div>
      <Footer />
    </div>
  );
}

export default ProductDetail;