import React from "react";
import { Link as RouteLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <RouteLink to="/">Home</RouteLink>
        </li>
        <li>
          <RouteLink to="/about">About</RouteLink>
        </li>
        <li>
          <RouteLink to="/articles-list">Articles</RouteLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
