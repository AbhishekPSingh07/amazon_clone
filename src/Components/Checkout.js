import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'

function Checkout() {
  return (
    <div className='checkout__container'>
      <div className='order__container'>
        <h2>Your Amazon Cart is Empty</h2>
        
        
        <div className='price'><small>Price</small></div>
        <div className='item__container'>

        </div>
        <h6>Subtotal(0 Items) : </h6>
      </div>
      <div className='bill__container'>
        <Subtotal/>
      </div>
    </div>
  )
}

export default Checkout
