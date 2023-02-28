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
            <span role="img" aria-label=''>⭐</span>
        </div>

      </div>
      <img src='https://m.media-amazon.com/images/I/315vs3rLEZL._AC_SY200_.jpg' className='product-image' alt='img'></img>
      <button>Add to Cart</button>
    </div>
  )
}

export default Product
