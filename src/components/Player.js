import React from 'react';

const Player = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }
  const videoID = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoID}`;

  return (
    <div>
      <div className="video-container">
        <iframe className="responsive-video" src={url}></iframe>
      </div>
      <div>
        <h5>{video.snippet.title}</h5>
        <h6>{video.snippet.decription}</h6>
      </div>
    </div>
  );
}

export default Player;