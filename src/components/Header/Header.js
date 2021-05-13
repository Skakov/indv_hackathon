
import React, { useContext } from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/lamborghini-text-logo.png"
import { IconButton } from "@material-ui/core";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const Header = () => {
    return (
    <div>
      <div className="header">
        <div className="container">
          <div className="navbar">
            <div className="navbar__regisrt">
              <Link>
                <IconButton>
                <ShoppingCartIcon />
                </IconButton>
              </Link>
              <Link to="/login">
                <IconButton>
                  <AccountCircleIcon className="login" />
                </IconButton>
              </Link>
              <Link to="/signup">
                
                <button className="signup">Sign up NOW</button>
              </Link>
            </div>
            
            <div className="header__logo">
              <Link to="/">
                <div>
                  <img className="navbar__logo" src={Logo} alt="logo"/>
                </div>
              </Link>
            </div>
            <div className="header__navbar">
              <div className="hamburger-menu">
                <input type="checkbox" id="menu__toggle" />
                <label htmlFor="menu__toggle" className="menu__btn">
                  <span></span>
                </label>
                  <ul className="navbar__menu menu__box">
                    <li><Link className="nav" to="/jackets" style={{textDecoration: 'none', color: 'black'}}>Jackets</Link></li>
                    <li><Link className="nav" to="/tshirts" style={{textDecoration: 'none', color: 'black'}}>Tshirts</Link></li>
                    <li><Link className="nav" to="/accessories" style={{textDecoration: 'none', color: 'black'}}>Accessories</Link></li>
                    <li><Link className="nav" to="/cars" style={{textDecoration: 'none', color: 'black'}}>Cars</Link></li>
                    <li><Link className="nav" to="/gift" style={{textDecoration: 'none', color: 'black'}}>Gift</Link></li>
                  </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;


