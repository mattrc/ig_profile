import React from 'react';
import { ProfilePic } from '../../../../../Profile/ProfilePic';
import './FeedPhotoComment.scss';

export function FeedPhotoComment({ comment }) {
  return (
    <div className="feed-photo-comment">
      <div><ProfilePic isTiny /></div>
      <div className="feed-photo-comment__content">
        <h2>q21sportfitness</h2>
        <span>{comment}</span>
      </div>
    </div>
  );
}