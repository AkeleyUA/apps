import React from "react";
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <header style={styles.nav}>
      <NavLink to="/" style={styles.link}>Home</NavLink>
      <NavLink to="/public" style={styles.link}>Public</NavLink>
      <NavLink to="/private" style={styles.link}>Private</NavLink>
    </header>
  );
};

export default NavBar;

const styles = {
  nav: {
    display: "flex",
    padding: 15,
    background: 'lightgrey'
  },
  link: {
    marginRight: 15,
  }
}
