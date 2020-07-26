import React from 'react';
import './Header.scss';
import logo from '../assets/instagram_logo.png';

export function Header() {
  return (
    <nav className="header">
      <div></div>
      <div className="header__content">
        <div className="section-content">
          <div className="logo">
            <div>
              <img src={logo} alt="logo" />
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </nav>
  );
}