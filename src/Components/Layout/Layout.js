import React from "react";
import classes from "./Layout.module.css";
import Navigation from "./Navigation";

const Layout = (props) => {
  return (
    <div>
      <Navigation />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
};

export default Layout;
