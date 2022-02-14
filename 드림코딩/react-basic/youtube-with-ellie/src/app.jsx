import React, { useEffect, useState } from 'react';
import VideoList from './components/video_list/video_list';
import styles from './app.module.css';
import Header from './components/header/header';
import VideoDetail from './components/video_detail/video_detail';

const App = ({youtubeAPI}) => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    youtubeAPI.getMostPopulars()
    .then(result => setVideos(result.items))
    .catch(error => console.log('error', error));
  }, []);

  const handleSearch = (query) => {
    youtubeAPI.getSearchResults(query)
    .then(items => setVideos(items))
    .catch(error => console.log('error', error));
  };

  const selectVideo = (video) => {
    setSelectedVideo(video);
  }

  return (
    <div className={styles.app}>
      <Header onSearch={handleSearch}/>
      {
        selectedVideo && <VideoDetail video={selectedVideo}/>
      }
      <VideoList videos={videos} onVideoClick={selectVideo}/>
    </div>
  )
};

export default App;