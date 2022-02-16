import React from 'react';
import styles from './video_detail.module.css';

const VideoDetail = ({video}) => {
  return (
    <section className={styles.videoDetail}>
      <iframe 
        title='youtube video'
        id={video.id} 
        type="text/html" 
        width="720" height="405" 
        src={`https://www.youtube.com/embed/${video.id}`} 
        frameBorder="0" allowFullScreen>
      </iframe>
      <h1>{video.snippet.title}</h1>
    </section>
  );
};

export default VideoDetail;