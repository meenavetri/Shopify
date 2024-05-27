import React, { useContext } from "react";
import './Productdisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from "../../Context/ShopContext";
const Productdisplay =(props)=>{
        const {product}=props;
        const {addToCart}=useContext(ShopContext);
        
    return(
        <div className="Productdisplay">
            <div className="productdisplay-left">
                <div className="image-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="display-img">
                    <img src={product.image} alt=""  className="productdisplay-main-img"/>
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="right-prices">
                    <div className="old-price">${product.old_price}</div>
                    <div className="new-price">${product.new_price}</div>
                </div>
                <div className="discription">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi adipisci sit vero tenetur esse inventore deserunt est voluptates, corrupti, saepe soluta! Voluptates odio reprehenderit ipsum quo corrupti nihil, nobis sunt.
                </div>
                <div className="size">
                    <h1>Select Size</h1>
                    <div className="sizes">
                        <div>XS</div>
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                    </div>
                </div>
                <button className="addtocart" onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
                <p className="category"><span>Category : </span>Women , T-Shirt, Crop-top </p>
                <p className="category"><span>Tags : </span>Modern, Latest </p>
            </div>
        </div>
    )
}
export default Productdisplay;