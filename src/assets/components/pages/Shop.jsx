import React, { useState, useEffect, useCallback } from 'react';
import './Shop.css';
import dressesjson from '../responses/Dresses.json';
import springjson from '../responses/spring.json';
import womenNewjson from '../responses/womenNew.json';
import accessoriesJson from '../responses/accessories.json';
import bagsJson from '../responses/bags.json';
import hoodiesJson from '../responses/hoodies.json';
import jacketsJson from '../responses/jackets.json';
import shirtsJson from '../responses/shirts.json';
import shoesJson from '../responses/shoes.json';
import studentJson from '../response4.json'
import Product from '../Product';
import NavBar from '../Header';
import { Link, useLocation } from 'react-router-dom'
import { KeyboardArrowRight } from '@mui/icons-material'
import Carousel from 'react-multi-carousel';
import shirtPic from '../../img/categories/Aceesories-1.jpg.webp'
import shoesPic from '../../img/categories/short-1.jpg.webp'
import hoodPic from '../../img/categories/jacket-1.jpg.webp'
import dressPic from '../../img/categories/t-shirt-1.jpg.webp'
import accessoriesPic from '../../img/categories/fashion-1.jpg.webp'
import bagsPic from '../../img/categories/Swimswear-1.jpg.webp'
import jacketsPic from '../../img/categories/mw_uk_topman_480x480_23092023.jpg'
import Footer from '../Footer';

function Shop() {
  const location = useLocation();
  console.log('location:', location);

  // Access the state from the location object
  const { state } = location;

  // Check if state is defined and extract product data
  // Check if state is defined and extract product data
  let productData2 = state;
  console.log('productData2:', productData2);
  if(productData2 === null) {
    productData2 = {product: {category: 'bestSellerJson', title: 'Student Style'}}
  }
  useEffect(() => {}, [])


  
  const [products, setProducts] = useState([]);
  const [json, setJson] = useState(() => {
    if (productData2.product.category === 'studentJson') {
      return shoesJson;
    }

    if (productData2.product.category === 'womenNewjson') {
      return womenNewjson;
    }

    if (productData2.product.category === 'springjson') {
      return springjson;
    }

    if (productData2.product.category === 'campusJson') {
      return studentJson;
    } else {
      return shirtsJson;
    }
  });
  
  const [activespan, setActivespan] = useState('');
  const [activeCat, setActiveCat] = useState(() => {
    if (productData2.product.category != null) {
      return productData2.product.title;
    }
    
  })
  
  console.log(activeCat)

  

  const jsons = {
    'firstJson' : dressesjson,
    'secondJson' : accessoriesJson,
    'thirdJson' : bagsJson,
    'fourthJson' : hoodiesJson,
    'fifthJson' : jacketsJson,
    'sisthJson' : shirtsJson,
    'seventhJson' : shoesJson,
  }

  const renderJson = (jsonId, spanId, catId) => {
    setJson(jsonId)
    setActivespan(spanId)
    setActiveCat(catId)
  };

  useEffect(() => {
    setProducts(json.products);
  }, [json]);

  

  const responsive = {
    desktop: {
        breakpoint: {max: 3000, min: 1024},
        items: 5,
        slidesToSlide: 1
    },
    tablet: {
        breakpoint: {max: 1024, min: 464},
        items: 2,
        slidesToSlide: 1
    },
    mobile: {
        breakpoint: {max: 464, min: 0},
        items: 1,
        slidesToSlide: 1,
        
    }
  }

  const preloadImages = useCallback(() => {
    products.forEach((product) => {
      const img = new Image();
      img.src = `https://${product.imageUrl}`;
      img.src = `https://${product.additionalImageUrls[0]}`;
    });
  }, [products]);

  useEffect(() => {
    preloadImages();
  }, [preloadImages]);

  return (
    <div className='shop'>
      <NavBar />
      <div className='shopHeader'>
        <div className='shopHeader__cont'>
            <span className='shopHeader__title'>Shop</span>
            <div className='shopHeader__links'>
                <Link to='/' className='shopHeader__link'>Home</Link>  <KeyboardArrowRight />  <Link  to={`../`} className='shopHeader__link'>Shop</Link>
            </div>
        </div>
        <Carousel responsive={responsive} infinite={true}>
          <div onClick={() => {renderJson(shirtsJson,'category1', 'Shirts')}} className={activespan === 'category1' ? 'shop__li activeCategory' : 'shop__li'}>
            <img src={shirtPic} alt='carousel' />
            <span className='shop__liText'>Shirts</span>
          </div>
          <div onClick={() => {renderJson(shoesJson,'category2', 'Shoes')}} className={activespan === 'category2' ? 'shop__li activeCategory' : 'shop__li'}>
            <img src={shoesPic} alt='carousel' />
            <span className='shop__liText'>Shoes</span>
          </div>
          <div onClick={() => {renderJson(hoodiesJson,'category3', 'Hoodies')}} className={activespan === 'category3' ? 'shop__li activeCategory' : 'shop__li'}>
            <img src={hoodPic} alt='carousel' />
            <span className='shop__liText'>Hoodies</span>
          </div>
          <div onClick={() => {renderJson(dressesjson,'category4', 'Dresses')}} className={activespan === 'category4' ? 'shop__li activeCategory' : 'shop__li'}>
            <img src={dressPic} alt='carousel' />
            <span className='shop__liText'>Dresses</span>
          </div>
          <div onClick={() => {renderJson(accessoriesJson,'category5', 'Acessories')}} className={activespan === 'category5' ? 'shop__li activeCategory' : 'shop__li'}>
            <img src={accessoriesPic} alt='carousel' />
            <span className='shop__liText'>Accessories</span>
          </div>
          <div onClick={() => {renderJson(bagsJson,'category6', 'Bags')}} className={activespan === 'category6' ? 'shop__li activeCategory' : 'shop__li'}>
            <img src={bagsPic} alt='carousel' />
            <span className='shop__liText'>Bags</span>
          </div>
          <div onClick={() => {renderJson(jacketsJson,'category7', 'Jackets')}} className={activespan === 'category7' ? 'shop__li activeCategory' : 'shop__li'}>
            <img src={jacketsPic} alt='carousel' />
            <span className='shop__liText'>Jackets</span>
          </div>
          
        </Carousel>
        
      </div>
      <div className='shop__title'>
        <Link className='shop__titleLink' to='/'>Home</Link> <KeyboardArrowRight /><Link className='shop__titleLink' to='../shop'>Shop</Link> <KeyboardArrowRight /> {activeCat}
      </div>
      <div className='shop__cont' id='triggerElement'>
        {products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            title={product.name}
            image={`https://${product.imageUrl}`}
            image2={`https://${product.additionalImageUrls[0]}`}
            price={product.price.current.value}
            rating={product.productCode}
            extraImages={product.additionalImageUrls}
            brand={product.brandName} color={product.colour}
          />
        ))}
      </div>
      <Footer />
      
    </div>
  );
}

export default Shop;
