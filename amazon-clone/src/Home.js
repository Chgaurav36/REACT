import React from "react";
import "./Home.css";
import Product from "./Product";

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
          <Product 
          title = 'The Gift Box'
          price={300}
          image = "https://images-na.ssl-images-amazon.com/images/W/MEDIAX_792452-T2/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_2x_v3._SY608_CB573698005_.jpg"
          rating = {5}
          />
          <Product 
          title = 'The Gift Box'
          price={300}
          image = "https://images-na.ssl-images-amazon.com/images/W/MEDIAX_792452-T2/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_2x_v3._SY608_CB573698005_.jpg"
          rating = {5}
          />
         </div>

        <div className="home_row">
        <Product 
          title = 'The Gift Box'
          price={300}
          image = "https://images-na.ssl-images-amazon.com/images/W/MEDIAX_792452-T2/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_2x_v3._SY608_CB573698005_.jpg"
          rating = {5}
          />
          <Product 
          title = 'The Gift Box'
          price={300}
          image = "https://images-na.ssl-images-amazon.com/images/W/MEDIAX_792452-T2/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_2x_v3._SY608_CB573698005_.jpg"
          rating = {5}
          />
          <Product 
          title = 'The Gift Box'
          price={300}
          image = "https://images-na.ssl-images-amazon.com/images/W/MEDIAX_792452-T2/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_2x_v3._SY608_CB573698005_.jpg"
          rating = {5}
          />
          
        </div>

        <div className="home_row">
        <Product 
        
          title = 'The Gift Box'
          price={300}
          image = "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71qkzkC7bHL._AC_SX679_.jpg"
          rating = {5}

          />
         
        </div>
      </div>
    </div>
  );
};

export default Home;
