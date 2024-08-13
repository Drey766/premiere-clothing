import React, { useEffect, useState } from 'react'
import './Explore.css'
import dressesJson from '../responses/Dresses.json'
import bagsJson from '../responses/bags.json'
import hoodiesJson from '../responses/hoodies.json'
import accessoriesJson from '../responses/accessories.json'
import jacketsJson from '../responses/jackets.json'
import shirtsJson from '../responses/shirts.json'
import shoesJson from '../responses/shoes.json'
import suitsjson from '../responses/suits.json';
import womenNewjson from '../responses/womenNew.json';
import NavBar from '../Header'
import CheckoutHeader from '../CheckoutHeader'
import Product from '../Product'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { KeyboardArrowRight } from '@mui/icons-material'
import Footer from '../Footer'

function Explore() {
    const [dresses, setDresses] = useState([])
    const [bags, setBags] = useState([])
    const [hoodies, setHoodies] = useState([])
    const [accessories, setAccessories] = useState([])
    const [jackets, setJackets] = useState([])
    const [shirts, setShirts] = useState([])
    const [shoes, setShoes] = useState([])
    const [suits, setSuits] = useState([])
    const [newWomen, setnewWomen] = useState([])
    
    useEffect(() => {
        setDresses(dressesJson.products);
        setBags(bagsJson.products);
        setHoodies(hoodiesJson.products);
        setAccessories(accessoriesJson.products);
        setJackets(jacketsJson.products);
        setShirts(shirtsJson.products);
        setShoes(shoesJson.products);
        setSuits(suitsjson.products)
        setnewWomen(womenNewjson.products)
    }, [])
    const responsive = {
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 4,
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

  return (
    <div className='explore'>
        <NavBar triggerElement='.explore__ cont' />
        <CheckoutHeader title='Explore' link='../explore' linkTitle='Explore' />
        <div className='explore__header'>Home <KeyboardArrowRight /> Explore</div>
        <div className='explore__cont'>
            <div className='explore__section' id='triggerElement'>
                <div className='explore__title'><span className='explore__titleCont'>Women's New in</span></div>
                <div className='explore__products'>
                    <Carousel containerClass='explore__carousel' itemClass='explore__carouselItem' responsive={responsive} showDots={false} swipeable={true} draggable={true} autoPlay={true} autoPlaySpeed={3000}>
                        {newWomen.map((product) => (
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
                    </Carousel>
                </div>
            </div>

            <div className='explore__section' id='triggerElement'>
                <div className='explore__title'><span className='explore__titleCont'>Men's Shirts</span></div>
                <div className='explore__products'>
                    <Carousel containerClass='explore__carousel' itemClass='explore__carouselItem' responsive={responsive} showDots={false} swipeable={true} draggable={true} autoPlay={true} autoPlaySpeed={3000}>
                        {shirts.map((product) => (
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
                    </Carousel>
                </div>
            </div>

            <div className='explore__section' id='triggerElement'>
                <div className='explore__title'><span className='explore__titleCont'>Men's Suits</span></div>
                <div className='explore__products'>
                    <Carousel containerClass='explore__carousel' itemClass='explore__carouselItem' responsive={responsive} showDots={false} swipeable={true} draggable={true} autoPlay={true} autoPlaySpeed={3000}>
                        {suits.map((product) => (
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
                    </Carousel>
                </div>
            </div>

            <div className='explore__section'>
                <div className='explore__title'><span className='explore__titleCont'>Dresses</span></div>
                <div className='explore__products'>
                    <Carousel containerClass='explore__carousel' itemClass='explore__carouselItem' responsive={responsive} showDots={false} swipeable={true} draggable={true} autoPlay={true} autoPlaySpeed={3000}>
                        {dresses.map((product) => (
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
                    </Carousel>
                </div>
            </div>

            <div className='explore__section'>
                <div className='explore__title'><span className='explore__titleCont'>Women's Hoodies</span></div>
                <div className='explore__products'>
                    <Carousel containerClass='explore__carousel' itemClass='explore__carouselItem' responsive={responsive} showDots={false} swipeable={true} draggable={true} autoPlay={true} autoPlaySpeed={3000}>
                        {hoodies.map((product) => (
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
                    </Carousel>
                </div>
            </div>

            <div className='explore__section'>
                <div className='explore__title'><span className='explore__titleCont'>Men's Jackets</span></div>
                <div className='explore__products'>
                    <Carousel containerClass='explore__carousel' itemClass='explore__carouselItem' responsive={responsive} showDots={false} swipeable={true} draggable={true} autoPlay={true} autoPlaySpeed={3000}>
                        {jackets.map((product) => (
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
                    </Carousel>
                </div>
            </div>

            <div className='explore__section'>
                <div className='explore__title'><span className='explore__titleCont'>Men's Shoes</span></div>
                <div className='explore__products'>
                    <Carousel containerClass='explore__carousel' itemClass='explore__carouselItem' responsive={responsive} showDots={false} swipeable={true} draggable={true} autoPlay={true} autoPlaySpeed={3000}>
                        {shoes.map((product) => (
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
                    </Carousel>
                </div>
            </div>

            <div className='explore__section'>
                <div className='explore__title'><span className='explore__titleCont'>Bags</span></div>
                <div className='explore__products'>
                    <Carousel containerClass='explore__carousel' itemClass='explore__carouselItem' responsive={responsive} showDots={false} swipeable={true} draggable={true} autoPlay={true} autoPlaySpeed={3000}>
                        {bags.map((product) => (
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
                    </Carousel>
                </div>
            </div>

            <div className='explore__section'>
                <div className='explore__title'><span className='explore__titleCont'>Women's Accessories</span></div>
                <div className='explore__products'>
                    <Carousel containerClass='explore__carousel' itemClass='explore__carouselItem' responsive={responsive} showDots={false} swipeable={true} draggable={true} autoPlay={true} autoPlaySpeed={3000}>
                        {accessories.map((product) => (
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
                    </Carousel>
                </div>
            </div>
            
        </div>
        <Footer />
    </div>
  )
}

export default Explore