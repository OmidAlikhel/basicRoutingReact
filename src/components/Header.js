import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

export const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">
        <img src={logo} alt="logo" />
        <span>RouteMate</span>
      </Link>

      <nav className="navigation">
        <NavLink to="/" className="link">
          Home
        </NavLink>
        <NavLink to="/Products" className="link">
          Product
        </NavLink>
        <NavLink to="/contact" className="link">
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

// export default Header
