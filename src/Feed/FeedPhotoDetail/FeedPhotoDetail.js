import React from 'react';
import './FeedPhotoDetail.scss';
import { UserHeader } from './UserHeader';
import { FeedPhotoZoom } from './FeedPhotoZoom';
import { FeedPhotoInteractions } from './FeedPhotoInteractions';

export function FeedPhotoDetail({ src, comments }) {
  return (
    <article className="feed-photo-detail">
      <UserHeader />
      <FeedPhotoZoom src={src} />
      <FeedPhotoInteractions comments={comments} />
    </article>
  )
}