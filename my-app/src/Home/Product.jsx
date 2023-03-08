import React from 'react'
import '../Home/Product.css'
function Product({title,image1,image2,image3,image4,caption1,caption2,caption3,caption4}) {
  return (
    <div className='product'>
      <div className="product-info">
        <h2>{title}</h2>
      </div>
      <div className="image-section">

     
      <div className="image">
      <img src={image1} className='product-image' alt='img'></img>
      <p>{caption1}</p>
      </div>
     <div className="image">
     <img src={image2} className='product-image' alt='img'></img>
      <p>{caption2}</p>
     </div>
     <div className="image">
     <img src={image3} className='product-image' alt='img'></img>
      <p>{caption3}</p>
     </div>
     <div className="image">
     <img src={image4} className='product-image' alt='img'></img>
      <p>{caption4}</p>
     </div>
     
     </div>
      <a href='#123'>See more</a>
    </div>
  )
}

export default Product
