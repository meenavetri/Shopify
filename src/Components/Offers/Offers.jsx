import React from "react";
import './Offers.css';
import exclusive_image from '../Assets/exclusive_image.png';
const Offers =() =>{
    return (
        <div className="offers">
            <div className="offers-left">
                <h1>Exclusive</h1>
                <h1>OFFERS FOR YOU</h1>
                <br />
                <p>ONLY ON BESR SELLERS PRODUCT</p>
                <button>CHECK NOW</button>
            </div>
            <div className="offers-right">
                <img src={exclusive_image} alt="" />
            </div>
        </div>
    )
}
export default Offers