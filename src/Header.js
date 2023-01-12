import React from "react";
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import { ShoppingCart } from "@material-ui/icons";

function Header() {
  return (
    <div className="header">
      <img
        className="header_logo"
        alt="Logo"
        src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'
      />

      <div className="header_nav1"> 
      <div className="header_option">
            <span className='header__optionLineOne'>Hello</span>
            <span className='header__optionLineTwo'>📍 Select your address</span>
          </div>
      </div>

      <div className="header_search">
        <input className="header__searchInput" type="text" />
        <SearchIcon
        className="header__searchIcon"/>
        </div>

        <div className="header_nav">
          <div className="header_option">
            <span className='header__optionLineOne'>Hello, sign in</span>
            <span className='header__optionLineTwo'>Account & Lists</span>
          </div>

          <div className="header_option">
            <span className='header__optionLineOne'>Returns</span>
            <span className='header__optionLineTwo'>& Orders</span>
          </div>

          <div className="header_option">
            <span className='header__optionLineOne'>Your</span>
            <span className='header__optionLineTwo'>Prime</span>
          </div>

          <div className="header__optionCart"> 
            <ShoppingCart/>
            <span className="header__optionLineTwo header__cartCount">0</span>
          </div>


        </div>
    </div>
  );
}

export default Header;
