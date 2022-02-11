import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <h3>This is Logo</h3>
      <ul>
        <Link to='/'>
          <li>Main</li>
        </Link>
        <Link to='/About'>
          <li>About</li>
        </Link>
        <Link to='/Info'>
          <li>Info</li>
        </Link>
      </ul>
    </nav>
  )
};

export default Nav;