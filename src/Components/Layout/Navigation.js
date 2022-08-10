import React from "react";
import { Link } from "react-router-dom";
import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All</Link>
          </li>
          <li>
            <Link to="/favorites">Faviorites</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
