import React from "react";
import { Link, NavLink } from "react-router-dom";
// changing them to links and nav links will stop the page from refreshing
// NavLink fires a className of Active on click

export default function Navbar() {
  return (
    <div>
      <nav className="nav-wrapper red darken-3">
        <div className="container">
          <a href="/" className="brand-logo">
            Poke'Times
          </a>
          <ul className="right">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
