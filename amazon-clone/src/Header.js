import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

const Header = () => {
  return (
    <div className="header">
      <img
        className="header_logo"
        src="https://www.nicepng.com/png/full/16-167642_amazon-logo-amazon-logo-white-text.png"
        alt=""
      />
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

        <div className="header_optionBasket">
          <ShoppingBasketIcon />
          <span className="header_optionlineTwo header_BasketCount">1</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
