import React from 'react'
import '../Home/Product.css'
function Product() {
  return (
    <div className='product'>
      <div className="product-info">
        <p>The Lean Startup</p>
        <p className='product-price'>
            <small>$</small>
            <strong>19.99</strong>
        </p>
        <div className="product-rating">
            
        </div>
      </div>
    </div>
  )
}

export default Product
