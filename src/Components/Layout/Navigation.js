import React from "react";
import { Link } from "react-router-dom";
import classes from "./Navigation.module.css";
import { useContext } from "react";

import FavoritesContext from "../../store/favorites-context";
import AuthContext from "../../store/auth-context";

const Navigation = () => {
  const favotitesCtx = useContext(FavoritesContext);

  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
  };

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All</Link>
          </li>
          {isLoggedIn && (
            <li>
              <Link to="/favorites">Faviorites</Link>
            </li>
          )}
          <li>
            <Link to="/about">
              About <span>{favotitesCtx.totalFavorites}</span>
            </Link>
          </li>
          {!isLoggedIn && (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
