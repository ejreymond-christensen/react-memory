import React from "react";

const styles = {
  icon: {
    height: 35
  }
};

const Nav = props => (
  <nav className= "navbar navbar-dark bg-dark">
    <span className= "navbar-brand mb-0 h1"><img src= "/logo.png" style={styles.icon} alt="logo" />estworld Memory</span>
    <span className= "navbar-text">
      Objective: Only choose'm once!
    </span>
    <span className= "navbar-text">
      Score: 1 | Top Score: 9
    </span>
  </nav>
);

export default Nav;
