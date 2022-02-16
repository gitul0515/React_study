import React from 'react';
import VideoItem from '../video_item/video_item';
import styles from './video_list.module.css'

const VideoList = ({ videos, onVideoClick, selected }) => {
  return (
    <ul className={`${styles.videos} ${selected ? styles.selected : styles.unselected}`}>
      {
        videos.map(video => (
          <VideoItem key={video.id} video={video} onVideoClick={onVideoClick} selected={selected}/>
        ))
      }
    </ul>
  )
};

export default VideoList;
