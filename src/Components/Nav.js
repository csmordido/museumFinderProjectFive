import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <Router>
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/saved-museums'>Saved Museums</NavLink>
      </nav>
    </Router>
  )
};

export default Nav;