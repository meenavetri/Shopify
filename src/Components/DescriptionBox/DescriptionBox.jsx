import React from 'react'
import './DescriptionBox.css';
const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="description-navigator">
        <div className="descriptionbox-navbox">
            Description
        </div>
        <div className="descriptionbox-navbox fade">
            Reviews (122)
        </div>
        </div>
        <div className="descriptionbox-description">
            <p>An e-commerce website is an online platform that facilitates buying and selling
                of products or services over the internet serves as a virtual marketplace where business and individual showcase their
                products, interact with customers, and conduct transactions without the need for a physical presence, E-commerce websie have
                gained immense popularity due to their convenient accessibiltiy, and the global reach they offer.
            </p>
            <p>
                E-commerce website typically display products or services along with detailed descriptions, images, prices and any available
                varieties (e.g. sizes, colours). Each product usually has its own dedicated pages with relavent informations.
            </p>
        </div>
      
    </div>
  )
}

export default DescriptionBox
