import React from 'react'
import '../Home/Scroll.css'

function Scrollsection({ title, image1, image2, image3, image4, image5, image6, image7, image8, image9 }) {
  return (
    <div className="scrollable-section">
      <div className="heading">
        <h2>{title}</h2>
      </div>
      <div className="images">
        <img src={image1} alt=""></img>
        <img src={image2} alt=""></img>
        <img src={image3} alt=""></img>
        <img src={image4} alt=""></img>
        <img src={image5} alt=""></img>
        <img src={image6} alt=""></img>
        <img src={image7} alt=""></img>
        <img src={image8} alt=""></img>
        <img src={image9} alt=""></img>

      </div>

    </div>
  )
}

export default Scrollsection
