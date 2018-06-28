import React from 'react';

const Video = ({ video, onSelect }) => {//(props)
  //const video = props.video;
  const imgURL = video.snippet.thumbnails.default.url;
  return (
    <li className="collection-item" onClick={() => onSelect(video)}>
      <div>
        <div>
          <img className="responsive-img" src={imgURL} />
        </div>
        <div className="title align-center">{video.snippet.title}</div>
      </div>
    </li>
  );
}

export default Video;