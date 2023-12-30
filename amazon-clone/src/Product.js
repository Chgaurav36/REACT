import React from "react";
import "./Product.css";

const Product = () => {
  return (
    <div className="product">
      <div className="product_info">
        <p>Lorem ipsum dolor sit amet consectetur</p>
        <p className="product_price">
          <small>RS.</small>
          <strong>200</strong>
        </p>
        <div className="product_rating">
          <p>⭐</p>
        </div>
      </div>
      <img
        src="https://images-na.ssl-images-amazon.com/images/W/MEDIAX_792452-T2/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_2x_v3._SY608_CB573698005_.jpg"
        alt=""
      />
      <button>Add to basket</button>
    </div>
  );
};

export default Product;
