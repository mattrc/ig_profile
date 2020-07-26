import React from 'react';
import { ProfileMetric } from './ProfileMetric';
import './ProfileMetrics.scss';

export function ProfileMetrics() {
  return (
    <ul className="profile-metrics">
      <ProfileMetric quantity="1516" label="publicaciones" />
      <ProfileMetric quantity="13.3k" label="seguidores" />
      <ProfileMetric quantity="49" label="seguidos" />
    </ul>
  );
}