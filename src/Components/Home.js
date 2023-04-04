import React from 'react';
import './Home.css';
import ImageSlider from './ImageSlider';
import Product from './Product';
import { SliderData } from './SliderData';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselProduct from './CarouselProduct';


function Home() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 9
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 9
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 7
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 7
    }
  };
  return (
    
    <div className='home'>
      <ImageSlider className='slider__bar'slides ={SliderData}/>     
      <div className='home__container'> 
          <div className='home__row'>
            <Product/>
              <Product/>
              <Product/>
              <Product/>
            </div>
          <div className='home__row'>
            <Product/>
              <Product/>
              <Product/>
              <Product/>
          </div>
          
          
        <Carousel responsive={responsive} className='carousel__bar'
          removeArrowOnDeviceType={["tablet", "mobile"]}
          infinite>
          <CarouselProduct/>
          <CarouselProduct/>
          <CarouselProduct/>
          <CarouselProduct/>
          <CarouselProduct/>
          <CarouselProduct/>
          <CarouselProduct/>
          <CarouselProduct/>
          <CarouselProduct/>
        </Carousel>
        <Carousel responsive={responsive} className='carousel__bar'
          removeArrowOnDeviceType={["tablet", "mobile"]}
          infinite>
          <CarouselProduct/>
          <CarouselProduct/>
          <CarouselProduct/>
          <CarouselProduct/>
          <CarouselProduct/>
          <CarouselProduct/>
          <CarouselProduct/>
          <CarouselProduct/>
          <CarouselProduct/>
        </Carousel>
        <div className='home__row'>
            <Product/>
              <Product/>
              <Product/>
              <Product/>
            </div>
          <div className='home__row'>
            <Product/>
              <Product/>
              <Product/>
              <Product/>
          </div>
          
          
        <Carousel responsive={responsive} className='carousel__bar'
          removeArrowOnDeviceType={["tablet", "mobile"]}
          infinite>
          <CarouselProduct/>
          <CarouselProduct/>
          <CarouselProduct/>
          <CarouselProduct/>
          <CarouselProduct/>
          <CarouselProduct/>
          <CarouselProduct/>
          <CarouselProduct/>
          <CarouselProduct/>
        </Carousel>
        <Carousel responsive={responsive} className='carousel__bar'
          removeArrowOnDeviceType={["tablet", "mobile"]}
          infinite>
          <CarouselProduct/>
          <CarouselProduct/>
          <CarouselProduct/>
          <CarouselProduct/>
          <CarouselProduct/>
          <CarouselProduct/>
          <CarouselProduct/>
          <CarouselProduct/>
          <CarouselProduct/>
        </Carousel>
      </div>
    </div>
  )
}

export default Home
