import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";

const Checkout = () => {
  return (
    <>
      <div className="checkout">
        <div className="checkout_left">
          <img
            className="checkout_ad"
            src="https://m.media-amazon.com/images/G/01/x-locale/cs/orders/holiday/2023/Desktop_Banner_Animation_1024x80.gif"
            alt=""
          />
          <div>
            <h2 className="checkout_title">
              Your Shopping Basket
            </h2>
            {/* Checkout Product */}
            {/* Checkout Product */}
            {/* Checkout Product */}
            {/* Checkout Product */}
            {/* Checkout Product */}
            {/* Checkout Product */}
            
          </div>
        </div>
        <div className="checkout_right">
          <Subtotal/>
        </div>
      </div>
    </>
  );
};

export default Checkout;
