import React, { useState } from 'react';
import './FeedPhotoZoom.scss';

export function FeedPhotoZoom({ src }) {
  const [paddingBottom, setPaddingBottom] = useState(0);

  function onImgLoad({target:img}) {
    const height = img.naturalHeight;
    const width = img.naturalWidth;
    const paddingBottom = height * 100 / width;
    setPaddingBottom(`${paddingBottom}%`);
  }
  
  return (
    <div className={`feed-photo-zoom`}>
      <div className={`feed-photo-zoom__content`}>
        <div style={{ paddingBottom }}>
          <img onLoad={onImgLoad} src={src} alt={src} />
        </div>
      </div>
    </div>
  );
}