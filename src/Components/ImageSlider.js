import React,{useState,useEffect} from 'react'
import { SliderData } from './SliderData'
import {RiArrowLeftSLine,RiArrowRightSLine} from 'react-icons/ri'
import './ImageSlider.css'


function ImageSlider({slides}) {
    const [current,setCurrent] = useState(0);
    const length = slides.length;
    const autoScroll = true;
    let slideInterval;
    function auto(){
      slideInterval = setInterval(nextSlide,500000);
    }
    useEffect(()=>{
      if(autoScroll){
        auto ();
      }
    },[current]);
    function nextSlide(){
        setCurrent(current === length-1 ? 0 : current+1);
    };
    function prevSlide(){
        setCurrent(current === 0 ? length-1 : current-1);
    };
    // console.log(current);
    if(!Array.isArray(slides) || slides.length <= 0){
        return null;
    }
    
  return (
    <div className='slider'>
        <RiArrowLeftSLine className='left__arrow' onClick={prevSlide}/>
        <RiArrowRightSLine className='right__arrow' onClick={nextSlide} />
      {SliderData.map((slide,index)=>{
        return(
            <div className={index===current ? 'slide active' : 'slide'} key ={index}>
                {index === current &&(<a href={slide.src}><img className='slider__images' src={slide.image} alt='travel image'/></a>)}
            
            </div>
        )
      })}
    </div>
  )
}

export default ImageSlider
