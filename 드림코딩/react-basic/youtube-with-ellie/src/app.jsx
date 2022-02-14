import React, { useEffect, useState } from 'react';
import VideoList from './components/video_list/video_list';
import styles from './app.module.css';
import Header from './components/header/header';

const App = () => {
  const [videos, setVideos] = useState([]);

  const handleSearch = (query) => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=24&q=${query}&type=video&key=AIzaSyApe30tsjafvMnnykLW9pjN1YihHEi04PQ`, requestOptions)
      .then(response => response.json())
      .then(result => result.items.map(item => 
        ({ ...item, id: item.id.videoId })))
      .then(items => setVideos(items))
      .catch(error => console.log('error', error));
  };

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=24&key=AIzaSyApe30tsjafvMnnykLW9pjN1YihHEi04PQ", requestOptions)
      .then(response => response.json())
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