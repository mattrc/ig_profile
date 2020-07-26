import React from 'react';
import './FeedPhotoComments.scss';
import { FeedPhotoComment } from './FeedPhotoComment';

export function FeedPhotoComments({ comments }) {
  return (
    <div className="feed-photo-comments">
      <ul>
        { comments.map(comment => (
          <li style={ { paddingBottom: '16px', paddingTop: '12px' }}>
          <FeedPhotoComment comment={comment} />
        </li>
        ))}
      </ul>
    </div>
  );
}