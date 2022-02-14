import React from 'react';
import styles from './video_item.module.css'

const VideoItem = ({ video: { snippet } }) => {
  return (
    <li className={styles.video}>
      <img src={snippet.thumbnails.medium.url} alt="비디오 썸네일" className={styles.thumbnail} />
      <div className={styles.metadata}>
        <h4 className={`${styles.title} ${styles.ellipsis}`}>{snippet.title}</h4>
        <p className={styles.channel}>{snippet.channelTitle}</p>
      </div>
    </li>
  )
};

export default VideoItem;