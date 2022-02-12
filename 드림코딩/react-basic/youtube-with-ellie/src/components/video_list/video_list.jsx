import React from 'react';
import VideoItem from '../video_item/video_item';

const VideoList = props => {
  const { videos } = props;
  return (
    videos.map(video => (
      <VideoItem key={video.id} video={video}/>
    ))
  )
};

export default VideoList;
