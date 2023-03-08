import React from 'react'
import '../Home/Home.css'
import Product from './Product'
import Single from './Single'

function Home() {
  return (
    <div className='home'>
      <div className="main-container">
        <img src="https://m.media-amazon.com/images/I/511wFGKtSfL._SX1500_.jpg" className='home-banner' alt="img" />
      </div>

      <div className="home-row">
        <Product title='Shop & Pay | Earn rewards daily' image1="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonPay/Rewards/GWBTFPercolateCards/PC_Quard_Card_186X116_ScratchCard._SY116_CB627364845_.jpg" caption1='Claim your scratch cards' image2='https://images-eu.ssl-images-amazon.com/images/G/31/AmazonPay/Rewards/GWBTFPercolateCards/PC_Quard_Card_186X116_CollectedOffers._SY116_CB627364845_.jpg' caption2='Redeem your collected rewards'
          image3='https://images-eu.ssl-images-amazon.com/images/G/31/img17/APay/GWQC/PC_Pay__Win0.5x._SY116_CB616103432_.jpg' caption3='Pay & Win scratch cards' image4='https://images-eu.ssl-images-amazon.com/images/G/31/img17/APay/GWQC/PC_Shop__collect0.5x._SY116_CB616103432_.jpg' caption4='Shop & Collect Rewards daily' />
        <Single />
        <Product title='Automotive essentials | Up to 60% off' image1='https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Glasscare1X._SY116_CB410830553_.jpg' caption1='Cleaning accessories' image2='https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Rim_tyrecare1x._SY116_CB410830552_.jpg' caption2='Tyre & rim care'
          image3='https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vega_helmet_186x116._SY116_CB405090404_.jpg' caption3='Helmets' image4='https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vaccum1x._SY116_CB410830552_.jpg' caption4='Vacuum Cleaner'
        />
        <Product />

      </div>
      <div className="home-row">
       
        <Product />
        <Product />
      </div>
      <div className="home-row">
        <Product />
        <Product />
        <Product />
        <Product />

      </div>
    </div>
  )
}

export default Home
