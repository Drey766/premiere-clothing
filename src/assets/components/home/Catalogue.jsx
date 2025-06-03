import React, { useState, useEffect, useCallback } from 'react';
import './Catalogue.css';
import jsonData from '../response3.json';
import jsonData2 from '../response4.json';
import jsonData3 from '../response5.json';
import Product from '../Product';

function Catalogue() {
  const [products, setProducts] = useState([]);
  const [json, setJson] = useState(jsonData);
  const [activespan, setActivespan] = useState('category1');
<<<<<<< HEAD
  
  const jsons = {
    'firstJson': jsonData,
    'secondJson': jsonData2,
    'thirdJson': jsonData3
  };

  const renderJson = (jsonId, spanId) => {
    setJson(jsonId);
    setActivespan(spanId);
    console.log(jsonId);
  };

  useEffect(() => {
    // Fix: Check if json exists and has products array
    if (json && json.products && Array.isArray(json.products)) {
      // Slice the first 12 products if needed
      setProducts(json.products.slice(0, 12));
    } else if (json && Array.isArray(json)) {
      // If json is an array itself, take the first 12 items
      setProducts(json.slice(0, 12));
    } else {
      setProducts([]);
    }
=======
  const jsons = {
    'firstJson' : jsonData,
    'secondJson' : jsonData2,
    'thirdJson' : jsonData3
  }

  const renderJson = (jsonId, spanId) => {
    setJson(jsonId)
    setActivespan(spanId)
    console.log(jsonId)
  };

  useEffect(() => {
    setProducts(json.products);
>>>>>>> 9716151989078967d3292c775c0f6ae8fe33ce01
  }, [json]);

  const preloadImages = useCallback(() => {
    products.forEach((product) => {
<<<<<<< HEAD
      if (product.imageUrl) {
        const img = new Image();
        img.src = `https://${product.imageUrl}`;
      }
      
      // Check if additionalImageUrls exists and has at least one item
      if (product.additionalImageUrls && product.additionalImageUrls.length > 0) {
        const img2 = new Image();
        img2.src = `https://${product.additionalImageUrls[0]}`;
      }
=======
      const img = new Image();
      img.src = `https://${product.imageUrl}`;
      img.src = `https://${product.additionalImageUrls[0]}`;
>>>>>>> 9716151989078967d3292c775c0f6ae8fe33ce01
    });
  }, [products]);

  useEffect(() => {
    preloadImages();
  }, [preloadImages]);

  return (
    <section className='catalogue'>
      <div className='catalogue__title'>
        <ul className='catalogue__ul'>
<<<<<<< HEAD
          <li 
            onClick={() => renderJson(jsonData, 'category1')} 
            className={activespan === 'category1' ? 'catalogue__li activeCategory' : 'catalogue__li'}
          >
            LATEST PRODUCTS
          </li>
          <li 
            onClick={() => renderJson(jsonData2, 'category2')} 
            className={activespan === 'category2' ? 'catalogue__li activeCategory' : 'catalogue__li'}
          >
            TOP SELLING
          </li>
          <li 
            onClick={() => renderJson(jsonData3, 'category3')} 
            className={activespan === 'category3' ? 'catalogue__li activeCategory' : 'catalogue__li'}
          >
            BEST SELLERS
          </li>
=======
          <li onClick={() => {renderJson(jsonData,'category1')}} className={activespan === 'category1' ? 'catalogue__li activeCategory' : 'catalogue__li'}>LATEST PRODUCTS</li>
          <li onClick={() => {renderJson(jsonData2,'category2')}} className={activespan === 'category2' ? 'catalogue__li activeCategory' : 'catalogue__li'}>TOP SELLING</li>
          <li onClick={() => {renderJson(jsonData3,'category3')}} className={activespan === 'category3' ? 'catalogue__li activeCategory' : 'catalogue__li'}>BEST SELLERS</li>
>>>>>>> 9716151989078967d3292c775c0f6ae8fe33ce01
        </ul>
      </div>
      <div className='products__cont'>
        {products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            title={product.name}
<<<<<<< HEAD
            image={product.imageUrl ? `https://${product.imageUrl}` : ''}
            image2={product.additionalImageUrls && product.additionalImageUrls.length > 0 
              ? `https://${product.additionalImageUrls[0]}` 
              : ''}
            price={product.price?.current?.value || 0}
            rating={product.productCode}
            extraImages={product.additionalImageUrls || []}
            brand={product.brandName} 
            color={product.colour}
=======
            image={`https://${product.imageUrl}`}
            image2={`https://${product.additionalImageUrls[0]}`}
            price={product.price.current.value}
            rating={product.productCode}
            extraImages={product.additionalImageUrls}
            brand={product.brandName} color={product.colour}
>>>>>>> 9716151989078967d3292c775c0f6ae8fe33ce01
          />
        ))}
      </div>
    </section>
  );
}

<<<<<<< HEAD
export default Catalogue;
=======
export default Catalogue;
>>>>>>> 9716151989078967d3292c775c0f6ae8fe33ce01
