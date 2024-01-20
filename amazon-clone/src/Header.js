import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom"
import { useCartContext } from "./context/StateContext";


const Header = () => {
  const [{basket}] = useCartContext();
  console.log(basket)
  return (
   
    <div className="header">
    <Link to="/">
      <img
          className="header_logo"
          src="https://www.nicepng.com/png/full/16-167642_amazon-logo-amazon-logo-white-text.png"
          alt=""
        />
    </Link>
     
      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionlineOne">Hello Gaurav</span>
          <span className="header_optionlineTwo">Sign in</span>
        </div>

        <div className="header_option">
          <span className="header_optionlineOne">Returns</span>
          <span className="header_optionlineTwo">& Orders</span>
        </div>

        <div className="header_option">
          <span className="header_optionlineOne">Your</span>
          <span className="header_optionlineTwo">Prime</span>
        </div>
        <Link to="/checkout">
        <div className="header_optionBasket">
          <ShoppingBasketIcon />
          <span className="header_optionlineTwo header_BasketCount">{0}</span>
        </div>

        </Link>
        
      </div>
    </div>
  );
};

export default Header;
