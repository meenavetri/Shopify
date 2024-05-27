import React, { useContext, useRef, useState } from "react";
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import nav_deopdown from '../Assets/dropdown_icon.png'
const Navbar = () =>{
    const {getTotalCartItems}=useContext(ShopContext);
    const [menu,setmenu]=useState("shop");
    const menuRef = useRef();
    const Dropdown_toggle=(e)=>{
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }
    return(
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>SHOPIFY</p>
            </div>
            <img className="nav-dropdown" src={nav_deopdown} alt="" onClick={Dropdown_toggle}/>
            <ul ref={menuRef} className="nav-menu">
                <li onClick={()=>{setmenu("shop")}}><Link to='/' style={{textDecoration:"none",color:"black"}}>Shop</Link> {menu==="shop"?<hr />:<></>}</li>
                <li onClick={()=>{setmenu("womens")}}><Link to='/womens'style={{textDecoration:"none",color:"black"}}>Womens</Link> {menu==="womens"?<hr />:<></>}</li>
                <li onClick={()=>{setmenu("mens")}}><Link to='/mens'style={{textDecoration:"none",color:"black"}}>Mens</Link> {menu==="mens"?<hr />:<></>}</li>
                <li onClick={()=>{setmenu("kids")}}><Link to='/kids'style={{textDecoration:"none",color:"black"}}>kids</Link> {menu==="kids"?<hr />:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/Login'style={{textDecoration:"none",color:"black"}}><button>Login</button></Link>
                <Link to='/cart'style={{textDecoration:"none",color:"black"}}><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    )
}
export default Navbar;

