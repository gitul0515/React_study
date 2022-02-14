import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <h3>목차</h3>
      <ol>
        <Link to='/'>
          <li>Home</li>
        </Link>
        <Link to='/login'>
          <li>LogIn</li>
        </Link>
        <Link to='/logout'>
          <li>LogOut</li>
        </Link>
      </ol>
    </nav>
  )
};

export default Nav;