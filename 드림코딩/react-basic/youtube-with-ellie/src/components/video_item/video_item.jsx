import React from 'react';
import styles from './video_item.module.css'

const VideoItem = ({ video, onVideoClick, selected }) => {
  const { snippet } = video;

  const handleVideoClick = () => {
    onVideoClick && onVideoClick(video);
  }

  return ( 
    <li className={`${styles.video} ${selected ? styles.selected: styles.unselected}`} onClick={handleVideoClick}>
      <img src={snippet.thumbnails.medium.url} alt="비디오 썸네일" className={styles.thumbnail} />
      <div className={styles.metadata}>
        <h4 className={`${styles.title} ${styles.ellipsis}`}>{snippet.title}</h4>
        <p className={styles.channel}>{snippet.channelTitle}</p>
      </div>
    </li>
  )
};

export default VideoItem;