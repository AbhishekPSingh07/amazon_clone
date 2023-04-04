import React from 'react'
import './CarouselProduct.css'
function CarouselProduct() {
  return (
    <div className='carousel__product'>
        <img src='https://m.media-amazon.com/images/I/41uGARZtgFL._AC_SY200_.jpg'/>
        <div className='product__info'>
            <p>ASUS TUF Gaming F15</p>
            <p className='product__info'>
                <small>₹</small>
                <strong>1,04,990</strong>
            </p>
            <div className='product__rating'>
                <p>⭐️</p>
            </div>
            <button>Add To Basket</button>
        </div>      
    </div>
  )
}

export default CarouselProduct
