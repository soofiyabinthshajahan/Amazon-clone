import React from 'react'
import '../Explore/Explore.css'
import Header from '../Head/Header'
import Banner from '../Home/Banner'
import Scrollsection from '../Home/Scrollsection'

import Singleproduct from './Singleproduct'
function Explore() {
    return (
        <div className='explore'>
            <Header />
            <div className="main">

                <div className="filter">

                </div>
                <div className="explore-product">
                    <h4>RESULTS</h4>
                    <br />
                    <p>Price and other details may vary based on product size and colour.</p>
                    
                    <div className="explore-row">
                        <Banner bannerImage="https://images-eu.ssl-images-amazon.com/images/G/31/AUTO_2021/BAU/Shikha/BISS-1242x450.jpg"/>
                    </div>
                    <div className="explore-row">
                        <Singleproduct image="https://m.media-amazon.com/images/I/516LU0H963L._AC_UL320_.jpg" caption="Logitech B170 Wireless Mouse, 2.4 GHz with USB Nano"
                            rating={4} price="595" />

                        <Singleproduct image="https://m.media-amazon.com/images/I/71edjA10hZL._AC_UL320_.jpg" caption="Mi Step Out 12 L Mini Backpack (Small Size, Black, Water Repellant"
                            rating={5} price="349" />

                        <Singleproduct caption="Women's Navy Blue Polyester Blazer Dress (LVD1134-B)" image="https://m.media-amazon.com/images/I/512a-spmo1L._AC_UL320_.jpg"
                            rating={4} price={810} />

                        <Singleproduct caption="Double Dress Black For Girls M L" image="https://m.media-amazon.com/images/I/61mQGdmdQqL._AC_UL320_.jpg"
                            rating={5} price="999" />


                    </div>
                    <div className="explore-row">
                    <Banner bannerImage="https://images-eu.ssl-images-amazon.com/images/G/31/AUTO_2021/BAU/BISS_coop/se-banners-17th-nov-2021-1500x300.jpg"/>

                    </div>
                    <div className="explore-row">
                    <Banner bannerImage="https://images-eu.ssl-images-amazon.com/images/G/31/Biss_2022/BAU_Extra/amazon-banner-10-nov-1500x300.jpg"/>

                    </div>
                    <div className="explore-row">
                    <Banner bannerImage="https://images-eu.ssl-images-amazon.com/images/G/31/Biss_2023/1500x300.jpg"/>

                    </div>
                    <div className="explore-row">
                        <Singleproduct caption="Women’s Fit & Flare Above Knee Length Dress (Ruby-441-449)" image="https://m.media-amazon.com/images/I/61lKbqgk4XL._AC_UL320_.jpg"
                            rating={3} price={584} />

                        <Singleproduct caption="3M Engine Oil Flush For two wheelers(50 ml)" image="https://images-eu.ssl-images-amazon.com/images/I/31uBNFhJlkL._AC_SX184_.jpg"
                            price={150} rating={4} />

                        <Singleproduct caption="SYSKA Tuo Portable Rechargeable Led Lamp Cum Torch " image="https://images-eu.ssl-images-amazon.com/images/I/41ovVEYX88L._AC_SX184_.jpg"
                            rating={4} price={350} />

                        <Singleproduct caption="Best of Indoor Lighting" image="https://m.media-amazon.com/images/I/71am3THY1tL._AC_UF226,226_FMjpg_.jpg"
                            rating={3} price={899} />



                    </div>
                    <div className="explore-row">
                        <Scrollsection title="NEWLY ARRIVED" image1="https://images-eu.ssl-images-amazon.com/images/I/41GnsVB6zIL._AC_SX184_.jpg"
                        image2="https://images-eu.ssl-images-amazon.com/images/I/515XJ+Ecn1L._AC_SX184_.jpg"
                        image3="https://images-eu.ssl-images-amazon.com/images/I/41ev71C+S3L._AC_SX184_.jpg"
                        image4="https://images-eu.ssl-images-amazon.com/images/I/41eArRt0RrL._AC_SX184_.jpg"
                        image5="https://images-eu.ssl-images-amazon.com/images/I/41+KNTg9cyL._AC_SX184_.jpg"
                        image6="https://images-eu.ssl-images-amazon.com/images/I/51Ij5ZtZbrL._AC_SX184_.jpg"
                        image7="https://images-eu.ssl-images-amazon.com/images/I/31tLOgHDfYL._AC_SX184_.jpg"
                        image8="https://images-eu.ssl-images-amazon.com/images/I/513wyzS4EgL._AC_SX184_.jpg"
                        image9="https://images-eu.ssl-images-amazon.com/images/I/41cdwJgLyAL._AC_SX184_.jpg"/>
                    </div>
                    <div className="explore-row">
                        <Singleproduct caption="Solimo Water Resistant Cotton Mattress Protector" image="https://m.media-amazon.com/images/I/41go3quRXSL._AC_UF226,226_FMjpg_.jpg"
                            price={499} rating={5} />

                        <Singleproduct caption="Mobil Super 3000 X1 Formula FE 5W-30" image="https://images-eu.ssl-images-amazon.com/images/I/41uUfnJMfWL._AC_SX184_.jpg"
                            rating={4} price={1299} />

                        <Singleproduct caption="ARNV Car Cover for European Car Kia S" image="https://images-eu.ssl-images-amazon.com/images/I/41eGKbswHmL._AC_SX184_.jpg"
                            rating={4} price={436} />


                        <Singleproduct caption="Full Face Helmet" image="https://images-eu.ssl-images-amazon.com/images/G/31/AUTO_2021/BAU/unrec_page_revamp/11.jpg"
                            rating={5} price={499} />



                    </div>
                    <div className="explore-row">
                        <Singleproduct caption="(Renewed) Lenovo ThinkPad T Series T450 (20BV0064US) " image="https://m.media-amazon.com/images/I/51jGI4PbSYL._AC_SS450_.jpg"
                            rating={4} price={14999} />

                        <Singleproduct caption="wipro 9W B22D LED White Emergency Bulb (NE9001)" image="https://m.media-amazon.com/images/I/51-Os7PmzEL._SX425_.jpg"
                            rating={4} price={319} />

                        <Singleproduct caption="LG 1.5 Ton 5 Star AI DUAL Inverter Split AC" image="https://m.media-amazon.com/images/I/51JFb7FctDL._SX679_.jpg"
                            rating={4} price={46490} />

                        <Singleproduct caption="Samsung 7 kg Fully-Automatic Top Loading Washing Machine" image="https://m.media-amazon.com/images/I/510mV2GAtkL._AC_UL320_.jpg"
                            rating={4} price={15490} />



                    </div>
                </div>
            </div>
        </div>
    )
}

export default Explore
