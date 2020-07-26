import React from 'react';
import './ProfilePic.scss';
import logo from '../../assets/q21_logo.jpg';

export function ProfilePic({ isTiny = false, src = logo}) {
  return (
    <div className={`profile-pic${isTiny ? ' profile-pic--tiny' : ''}`}>
      <canvas />
      <span className="profile-pic__image">
        <img src={src} alt=""/>
      </span>
    </div>
  );
}