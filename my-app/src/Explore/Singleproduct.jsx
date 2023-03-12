import React from 'react'
import '../Explore/Explore.css'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

function Singleproduct({ image, price, caption, rating }) {
  return (
    <div className="singleproduct">
      <div className='explore-image'>
        <img src={image} alt=''></img>
      </div>
      <div className="caption">
        <div className="title">
          <h2>
            {caption}
          </h2>
        </div>
        <div className="rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span role="img" aria-label="">⭐</span>
            ))}
        </div>
        <div className="price">
          <CurrencyRupeeIcon className='currency'/>{price}
        </div>
        <button>Add to cart</button>



      </div>
    </div>

  )
}

export default Singleproduct

