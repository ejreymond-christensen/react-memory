import React from "react";
import logo from "../../images/logo.png"

const styles = {
  icon: {
    height: 35
  }
};

const Nav = props => (
  <nav className= "navbar navbar-dark bg-dark">
    <span className= "navbar-brand mb-0 h1"><img src= {logo} style={styles.icon} alt="logo" />estworld Memory</span>
    <span className= "navbar-text">
      Objective: Only choose'm once!
    </span>
    <span className= "navbar-text">
      Score: {props.currentScore} | Top Score: {props.bestScore}
    </span>
  </nav>
);

export default Nav;
