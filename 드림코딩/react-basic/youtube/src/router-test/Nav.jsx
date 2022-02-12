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
        <Link to='/login'>
          <li>LogIn</li>
        </Link>
        <Link to='/logout'>
          <li>LogOut</li>
        </Link>
      </ul>
    </nav>
  )
};

export default Nav;