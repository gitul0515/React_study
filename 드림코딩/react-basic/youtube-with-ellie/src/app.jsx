import React, { useEffect, useState } from 'react';
import VideoList from './components/video_list/video_list';
import styles from './app.module.css';
import Header from './components/header/header';

const App = ({youtube}) => {
  const [videos, setVideos] = useState([]);

  const handleSearch = (query) => {
    youtube.getSearchResults(query)
    .then(items => setVideos(items))
    .catch(error => console.log('error', error));
  };

  useEffect(() => {
    youtube.getMostPopulars()
    .then(result => setVideos(result.items))
    .catch(error => console.log('error', error));
  }, []);

  return (
    <div className={styles.app}>
      <Header onSearch={handleSearch}/>
      <VideoList videos={videos} />
    </div>
  )
};

export default App;