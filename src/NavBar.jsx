import React from 'react';

const NavBar = ({ userCount }) => (
  <nav className="navbar">
    <a href="/" className="navbar-brand">
      Chatty
    </a>
    <div className="usersOnline">{userCount} user(s) online</div>
  </nav>
);

export default NavBar;
