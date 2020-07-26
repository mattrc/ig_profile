import React from 'react';
import './Profile.scss';
import { ProfilePic } from './ProfilePic';
import { ProfileData } from './ProfileData';
import { ProfileMetrics } from './ProfileMetrics';

export function Profile() {
  return (
    <header className="profile">
      <div className="profile__pic">
        <ProfilePic />
      </div>
      <section className="profile__data">
        <div className="profile-name">q21sportfitness</div>
        <ProfileMetrics />
        <ProfileData />
      </section>
    </header>
  );
}