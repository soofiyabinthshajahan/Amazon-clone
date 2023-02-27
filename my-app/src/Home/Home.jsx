import React from 'react'
import '../Home/Home.css'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
      <div className="main-container">
        <img src="https://m.media-amazon.com/images/I/511wFGKtSfL._SX1500_.jpg" className='home-banner' alt="img" />
      </div>

      <div className="home-row">
        <Product />
        <Product />
      </div>
      <div className="home-row">
        <Product />
        <Product />
        <Product />
      </div>
      <div className="home-row">
        <Product />

      </div>
    </div>
  )
}

export default Home
