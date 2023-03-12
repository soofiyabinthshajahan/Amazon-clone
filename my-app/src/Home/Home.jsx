import React from 'react'
import '../Home/Home.css'
import Product from './Product'
import Single from './Single'
import Scrollsection from './Scrollsection'
import Banner from './Banner'
import Header from '../Head/Header'


function Home() {
  return (
    <div className='home'>
      <Header/>
      <div className="main-container">
        <img src="https://m.media-amazon.com/images/I/81FAkaxUMaL._SX3000_.jpg" alt="" className='home-banner'></img>
      </div>

      <div className="home-row">
        <Product title='Shop & Pay | Earn rewards daily' image1="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonPay/Rewards/GWBTFPercolateCards/PC_Quard_Card_186X116_ScratchCard._SY116_CB627364845_.jpg" caption1='Claim your scratch cards' image2='https://images-eu.ssl-images-amazon.com/images/G/31/AmazonPay/Rewards/GWBTFPercolateCards/PC_Quard_Card_186X116_CollectedOffers._SY116_CB627364845_.jpg' caption2='Redeem your collected rewards'
          image3='https://images-eu.ssl-images-amazon.com/images/G/31/img17/APay/GWQC/PC_Pay__Win0.5x._SY116_CB616103432_.jpg' caption3='Pay & Win scratch cards' image4='https://images-eu.ssl-images-amazon.com/images/G/31/img17/APay/GWQC/PC_Shop__collect0.5x._SY116_CB616103432_.jpg' caption4='Shop & Collect Rewards daily' />

        <Single image="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_1x._SY304_CB628315133_.jpg" title="Up to 70% off | Clearance store" />

        <Product title='Automotive essentials | Up to 60% off' image1='https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Glasscare1X._SY116_CB410830553_.jpg' caption1='Cleaning accessories' image2='https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Rim_tyrecare1x._SY116_CB410830552_.jpg' caption2='Tyre & rim care'
          image3='https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vega_helmet_186x116._SY116_CB405090404_.jpg' caption3='Helmets' image4='https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vaccum1x._SY116_CB410830552_.jpg' caption4='Vacuum Cleaner'
        />

        <Product title="Bring delight to your home, this Holi" image1="https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Holi/QC-4/Artboard_1-1x._SY116_CB612887674_.jpg" caption1="Home entertainment & TV" image2="https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Holi/QC-4/Artboard_2-1x._SY116_CB612887674_.jpg" caption2="ACs & refrigerators"
          image3="https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Holi/QC-4/Artboard_3-1x._SY116_CB612887674_.jpg" caption3="Furniture & home upgrade" image4="https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Holi/QC-4/Artboard_4-1x._SY116_CB612887674_.jpg" caption4="Kitchen & home essentials"
        />

      </div>
      <div className="home-row">
      <Banner bannerImage="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/MFD/Mar23/Topscroll/PC/MFD2._CB595089956_.jpg"/>

      </div>
      <div className="home-row">

        <Product title="Starting ₹87 | Amazon Brands & more"
          image1="https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/baugwsept/xcm_banners_tile2-kitchen_186x116_in-en._SY116_CB612501062_.jpg" caption1="Starting ₹149 | Choppers & more"
          image2="https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/baugwsept/xcm_banners_tile3-home_186x116_in-en._SY116_CB612501076_.jpg" caption2="Starting ₹87 | String lights & more"
          image3="https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/baugwsept/xcm_banners_tile1-kitchen_186x116_in-en._SY116_CB612501057_.jpg" caption3="Starting ₹239 | Kitchen storage &"
          image4="https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/baugwsept/xcm_banners_tile4-home_186x116_in-en._SY116_CB612501080_.jpg" caption4="Starting ₹189 | Wall stickers & more" />


        <Product title="Up to 60% off | Styles for women"
          image1="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF1-186-116._SY116_CB636048992_.jpg" caption1="Women's Clothing"
          image2="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF2-186-116._SY116_CB636048992_.jpg" caption2="Footwear+Handbags"
          image3="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF4-186-116._SY116_CB636048992_.jpg" caption3="Watches"
          image4="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF3-186-116._SY116_CB636048992_.jpg" caption4="Fashion jewellery" />

        <Single title="Starting ₹189 | Wall stickers & more" image="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wearables/PC_CategoryCard_379X304_1._SY304_CB614835787_.jpg" />

        <Product title="Shop from famous street markets of India"
          image1="https://images-eu.ssl-images-amazon.com/images/G/31/cross-site/delhi_1x_09._SY116_CB616126380_.jpg" caption1="Delhi"
          image2="https://images-eu.ssl-images-amazon.com/images/G/31/cross-site/Maharastha_1x_678._SY116_CB616126380_.jpg" caption2="Maharashtra"
          image3="https://images-eu.ssl-images-amazon.com/images/G/31/cross-site/Gujarat_1x_122._SY116_CB616126380_.jpg" caption3="Gujarat"
          image4="https://images-eu.ssl-images-amazon.com/images/G/31/cross-site/TN_1x_987._SY116_CB616126380_.jpg" caption4="Tamil Nadu" />
      </div>
      <div className="home-row">
        <Banner bannerImage="https://images-eu.ssl-images-amazon.com/images/G/31/Biss_2023/HSS/BISS_1500x300-PC.jpg"/>
      </div>
      <div className="home-row">

        <Scrollsection title="Up to 50% off | Kitchen appliances, cookware & more" 
        image1="https://m.media-amazon.com/images/I/71FOIBG5f2L._AC_SY200_.jpg"
        image2="https://m.media-amazon.com/images/I/61GgIV3tqRL._AC_SY200_.jpg"
        image3="https://m.media-amazon.com/images/I/61GbW1W3qRL._AC_SY200_.jpg"
        image4="https://m.media-amazon.com/images/I/71DaWCa5WUL._AC_SY200_.jpg"
        image5="https://m.media-amazon.com/images/I/81W+9zsvSpL._AC_SY200_.jpg"
        image6="https://m.media-amazon.com/images/I/71IN+z1WhyL._AC_SY200_.jpg"
        image7="https://m.media-amazon.com/images/I/71xcGKPaiyL._AC_SY200_.jpg"
        image8="https://m.media-amazon.com/images/I/71VgHp7sgEL._AC_SY200_.jpg"
        image9="https://m.media-amazon.com/images/I/61YtlFfr9uL._AC_SY200_.jpg"
        />

      </div>
      <div className="home-row">
      <Scrollsection title="Under ₹599 | Popular home & kitchen picks on a budget from local shops" 
        image1="https://m.media-amazon.com/images/I/91ZaIrH3V4L._AC_SY200_.jpg"
        image2="https://m.media-amazon.com/images/I/61L1HMPtdSL._AC_SY200_.jpg"
        image3="https://m.media-amazon.com/images/I/51ElvVn--GL._AC_SY200_.jpg"
        image4="https://m.media-amazon.com/images/I/71jDgbvJQCL._AC_SY200_.jpg"
        image5="https://m.media-amazon.com/images/I/8101uN22EvL._AC_SY200_.jpg"
        image6="https://m.media-amazon.com/images/I/91VxMFzTHGL._AC_SY200_.jpg"
        image7="https://m.media-amazon.com/images/I/A1V8HmpatnL._AC_SY200_.jpg"
        image8="https://m.media-amazon.com/images/I/91F104LXpLL._AC_SY200_.jpg"
        image9="https://m.media-amazon.com/images/I/91QeC8FRoaL._AC_SY200_.jpg"
        />
      </div>
      <div className="home-row">
        <Banner bannerImage="https://images-eu.ssl-images-amazon.com/images/G/31/img23/OHL/January/Hom15/PC_Coupon_stripe.gif"/>
      </div>
      <div className="home-row">
        <Single title="Bestselling Smartwatch starts at ₹1,999" image="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wearables/PC_CategoryCard_379X304_2._SY304_CB614835787_.jpg"/>
        <Single title="Starting ₹5199 | Accelerate your" image="https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW_CPB_/QC_CC/Cycle_gw_pc_single_category_card_2x_379x304._SY304_CB618024063_.jpg"/>
        <Single title="Keep shopping for" image="https://m.media-amazon.com/images/I/41skB7kHQbL._AC_SY200_.jpg"/>
        <Product title="Capture your special Holi moments" image1="https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Holi/QC-3/Artboard_1_1x._SY116_CB612887854_.jpg" caption1="Action cameras" 
        image2="https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Holi/QC-3/Artboard_2_1x._SY116_CB612887854_.jpg" caption2="Smart phones & accessories"
        image3="https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Holi/QC-3/Artboard_3_1x._SY116_CB612887854_.jpg" caption3="Party speakers & headphones"
        image4="https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Holi/QC-3/Artboard_4-1x._SY116_CB612887854_.jpg" caption4="Party games & video games"/>
      </div>
      <div className="home-row">
        <Banner bannerImage="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/MFD/Feb23/N2GL/1._CB614017815_.gif"/>
      </div>
    </div>
  )
}

export default Home
