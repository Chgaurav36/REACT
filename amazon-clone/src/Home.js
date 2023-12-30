import React from "react";
import "./Home.css"
import Product from "./Product"

const Home = () => {
  return (
    <div className="home">
      <div className="home_container">
        <img
        className="home_image"
          src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61GfWyQax7L._SX3000_.jpg"
          alt=""
        />
        <div className="home_row">
            <Product/>
         </div>

        <div className="home_row">
            {/* Product */}
            {/* Product */}
             {/* Product */}
        </div>

        <div className="home_row">
            {/* Product */}
        </div>
      </div>
    </div>
  );
};

export default Home;
