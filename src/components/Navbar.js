import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="navbar">
      <h1 className="nav-header">Fun with Triangles</h1>
      <nav className="nav-list">
        <Link className="nav-list-items" to="/isTriangle">
          Is Triangle?
        </Link>

        <Link className="nav-list-items" to="/">
          Quiz
        </Link>

        <Link className="nav-list-items" to="/hypotenuse">
          Hypotenuse
        </Link>

        <Link className="nav-list-items" to="/area">
          Area of Triangle
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
