import React from 'react';
import style from './video_item.module.css'

const VideoItem = ({ video: { snippet } }) => {
  return (
    <li className={style.video}>
      <img src={snippet.thumbnails.medium.url} alt="비디오 썸네일" className={style.thumbnail} />
      <div className={style.metadata}>
        <h4 className={style.title}>{snippet.title}</h4>
        <p className={style.channel}>{snippet.channelTitle}</p>
      </div>
    </li>
  )
};

export default VideoItem;