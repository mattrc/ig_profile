import React from 'react';
import { ProfilePic } from '../../../Profile/ProfilePic';
import './UserHeader.scss';

export function UserHeader() {
  return (
    <header className="user-header">
      <div><ProfilePic isTiny /></div>
      <div className="user-header__info">q21sportfitness</div>
    </header>
  );
}