import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";

// the withROuter is supercharging the component so we can access props

const Navbar = (props) => {
  console.log(props);

  // so it can redirect to this page
  //   setTimeout(() => {
  //     props.history.push("/about");
  //   }, 2000);
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
};

export default withRouter(Navbar);
