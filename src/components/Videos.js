import React from 'react';
import Video from './Video';

const Videos = (props) => {
  const VideoItem = props.videos.map((video) => {
    return <Video
      onSelect={props.onSelect}
      key={video.etag}
      video={video} />
  })
  return (
    <ul className="collection">
      {VideoItem}
    </ul>
  );
}

export default Videos;