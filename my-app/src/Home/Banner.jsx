import React from 'react'
import '../Home/Banner.css'


function Banner({bannerImage}) {
  return (
    <div className='banner'>
      <img src={bannerImage} alt=''></img>
    </div>
  )
}

export default Banner


