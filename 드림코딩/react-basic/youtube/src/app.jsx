import { useEffect, useState } from 'react';
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

  console.log(topVideos);

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route 
            path="/" 
            element={<Videos videos={topVideos}/>}
          />
          <Route 
            path="/components/video-content" 
            element={
            <>
              <VideoContent/>
              <Videos videos={topVideos} />
            </>
          } 
          />
        </Routes>
        
      </BrowserRouter>
    </>
  )
});

export default App;
