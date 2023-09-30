import React from "react";
import "./navbar.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log("cart", cartItems)
  return (
    <div className="navbar">
      <Link to="/" style={{textDecoration:"none", color:"black"}}> <div>E-commerce</div></Link>
      <div className="share-logs">
        <div className="logs-wrapper">
          <img src="/svgs/ShareIcon.svg" alt="Share Icon" />
          Share Logs
        </div>
      </div>
      <Link to="cart">    <div className="cart-icon">
        <div className="cart-icon-wrapper">
             <img src="/svgs/ShoppingIcon.svg" alt="Share Icon" />
            <span className="cart-item-count"> {cartItems.length}</span>
        </div>
      </div></Link>
    </div>
  );
};

export default Navbar;

