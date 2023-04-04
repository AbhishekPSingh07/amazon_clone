import React from 'react'
import './Product.css'
function Product() {
  return (
    <div className='product'>
      <h3>Shop By Category</h3>
      <div className='product__row'>
        <div className='product__type'>
          <img className='image__product' src='https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Fresh._SY232_CB431401553_.jpg'/>
          <p>Fresh</p>
        </div>
        <div className='product__type'>
        <img className='image__product' src='https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Mobile._SY232_CB431401553_.jpg'/>
          <p>Mobiles</p>
        </div>
      </div>
      <div className='product__row'>
        <div className='product__type'>
        <img className='image__product' src='https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Fashion._SY232_CB431401553_.jpg'/>
          <p>Fashion</p>
        </div>
        <div className='product__type'>
        <img className='image__product' src='https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Electronic._SY232_CB431401553_.jpg'/>
          <p>Electonics</p>
        </div>
      </div>
    </div>
  )
}

export default Product
