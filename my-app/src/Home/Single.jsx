import React from 'react'
import '../Home/single.css'
function Single({title, image}) {
  return (
    <div className='single'>
      <h2>{title}</h2>
      <img src = {image} alt=""></img>
      <a href="#123">See more</a>
    </div>
  )
}

export default Single
