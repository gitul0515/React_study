import React, { useCallback, useEffect, useState } from 'react';
import VideoList from './components/video_list/video_list';
import styles from './app.module.css';
import Header from './components/header/header';
import VideoDetail from './components/video_detail/video_detail';

const App = ({youtubeAPI}) => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    youtubeAPI.getMostPopulars()
    .then(result => setVideos(result))
    .catch(error => console.log('error', error));
  }, [youtubeAPI]);

  const handleSearch = useCallback((query) => {
    youtubeAPI.getSearchResults(query)
    .then(items => {
      setSelectedVideo(null);
      setVideos(items);
    })
    .catch(error => console.log('error', error));
  }, [youtubeAPI]);

  const selectVideo = useCallback((video) => {
    setSelectedVideo(video);
  }, []);

  return (
    <div className={styles.app}>
      <Header onSearch={handleSearch}/>
      <div className={styles.videoContent}>
        {
          selectedVideo && <VideoDetail video={selectedVideo}/>
        }
        <VideoList videos={videos} onVideoClick={selectVideo} selected={selectedVideo ? true : false}/>
      </div>
    </div>
  )
};

export default App;