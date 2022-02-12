import { useCallback, useEffect, useState } from 'react';
import './app.css';
import Header from './components/header';
import Videos from './components/videos';
import VideoContent from './components/video-content';
import { memo } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = memo(() => {
  const [topVideos, setTopVideos] = useState([]);

  useEffect(() => {
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=24&key=AIzaSyApe30tsjafvMnnykLW9pjN1YihHEi04PQ")
    .then(response => response.json())
    .then(data => setTopVideos(data.items))
    .catch(err => console.log(err))
  }, []);

  const handleUpdateVideos = value => {
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=24&q=${value}&key=AIzaSyApe30tsjafvMnnykLW9pjN1YihHEi04PQ`)
    .then(response => response.json())
    .then(data => setTopVideos(data.items))
    .catch(err => console.log(err))
  }

  return (
    <>
      <Header onSubmit={handleUpdateVideos}/>
      <BrowserRouter>
        <Routes>
          <Route 
            path="/" 
            element={<Videos videos={topVideos}/>}
          />
          <Route 
            path="/components/video-content" 
            element={
            <div className='video-content'>
              <VideoContent/>
              <Videos videos={topVideos} />
            </div>
          } 
          />
        </Routes>
        
      </BrowserRouter>
    </>
  )
});

export default App;
