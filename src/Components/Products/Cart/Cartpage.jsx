import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removebutton } from "../../Redux/actions";
import "./Cart.css"
const Cartpage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log("cart", cartItems);
  const dispatch = useDispatch();
  const handleRemoveFromCart = (productId) => {
    dispatch(removebutton(productId));
  };
  return (
    <div>
      <div  className="product-cards-container">
        {cartItems.map((product, index) => (
          <div style={{marginLeft:"100px"}} className="product-card" key={index}>
            <div className="product-image-container">
              <img
                src={product.image}
                alt={`Product ${index}`}
                className="product-image"
              />
            </div>
            <h2>{product.price}</h2>
            <h3>{product.name}</h3>
            <p>{product.data1}</p>
            <button style={{backgroundColor:"#6db0e7", padding:"10px 30px", color:"white", border:"1px solid #6db0e7 "}} onClick={() => handleRemoveFromCart(product.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cartpage;
