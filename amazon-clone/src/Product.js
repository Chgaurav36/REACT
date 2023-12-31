import React from "react";
import "./Product.css";
import {useCartContext} from './StateContext'


const Product = ({id, title, image, price, rating}) => {
  const {addToCart} = useCartContext();
  console.log(addToCart);
  
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>RS.</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
        {Array(rating).fill().map((_,i) => (
          <p>⭐</p>
        ))}
          
        </div>
      </div>
      <img
        src={image}
        alt=""
      />
      <button onClick={()=>addToCart(id, title,image,price,rating)} >Add to basket</button>
    </div>
  );
};

export default Product;
