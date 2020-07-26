import React from 'react';
import './ProfileMetric.scss';

export function ProfileMetric({ quantity, label }) {
  return (
    <li className="profile-metric"><span className="profile-metric__quantity">{quantity}</span> {label}</li>
  )
}