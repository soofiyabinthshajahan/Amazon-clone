import React from 'react'
import '../Explore/Explore.css'
import Header from '../Head/Header'
import Single from '../Home/Single'

function Explore() {
    return (
        <div className='explore'>
            <Header />
            <div className="product">
                <div className="explore-row">
                    <Single />
                    <Single />
                    <Single />
                </div>
                <div className="explore-row">
                    <Single />
                    <Single />
                    <Single />
                </div>
                <div className="explore-row">
                    <Single />
                    <Single />
                    <Single />
                </div>
                <div className="explore-row">
                    <Single />
                    <Single />
                    <Single />
                </div>
            </div>
        </div>
    )
}

export default Explore
