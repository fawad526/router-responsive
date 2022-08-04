import React, { useState } from "react";//hooks
import { NavLink } from "react-router-dom";


import "./NavBar.css";

function NavBar() {
  const [click, setClick] = useState(false);//define

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            ReactRouter
          </NavLink>

          <ul className= "nav-menu">
            <li >
              <NavLink
                exact to="/" activeClassName="active" className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li >
              <NavLink
                exact to="/about" activeClassName="active"  className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li >
              <NavLink
                exact to="/blog"  activeClassName="active" className="nav-links"
                onClick={handleClick}
              >
                Blog
              </NavLink>
            </li>
            <li >
              <NavLink
               exact  to="/contact" activeClassName="active" className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            
          </div>
        </div>
        
      </nav>
    </>
  );
}

export default NavBar;
