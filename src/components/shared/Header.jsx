import React from "react";
import { Link } from "react-router-dom";
import "./styles/Header.css";

const Header = ({ sidebarActive, handleSidebar, handleCartSidebar }) => {
  return (
    <header className={`header ${sidebarActive}`}>
      <h1 className="header_title">
        <Link to="/">Techno Store</Link>
      </h1>
      <nav className="header_nav">
        <ul>
          <li>
            <Link className="link" to="/register">
              <i className="bx bx-edit"></i> Register
            </Link>
          </li>
          <li>
            <Link className="link" to="/login">
              <i className="bx bx-user"></i> Login
            </Link>
          </li>
          <li>
            <button className="btnCart" onClick={handleCartSidebar}>
              <i className="bx bx-cart"></i> Cart
            </button>
          </li>
          <li>
            <Link className="link" to="/purchases">
              <i className="bx bxs-shopping-bags"></i> Purchases
            </Link>
          </li>
        </ul>
        <button className="btn_close_sidebar" onClick={handleSidebar}>
          <i className="bx bx-x"></i>
        </button>
      </nav>
    </header>
  );
};

export default Header;
