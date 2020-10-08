import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <ul>
        <Link to ='/'>
          <li>home</li>
        </Link>

        <Link to ='/about'>
          <li>about</li>
        </Link>
      </ul>
    </nav>
  );
}

export default NavBar;
