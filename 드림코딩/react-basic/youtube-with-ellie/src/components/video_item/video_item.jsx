import React from 'react';

const VideoItem = (props) => {
  const { video } = props;
  return (
    <h1>{video.snippet.title}</h1>
  )
};

export default VideoItem;