import { useEffect, useState } from 'react';
import './app.css';
import Header from './components/header';
import Videos from './components/videos';
import VideoDetail from './components/video-detail';
import { memo } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = memo(() => {
  const [topVideoList, setTopVideoList] = useState([]);

  useEffect(() => {
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=24&key=AIzaSyApe30tsjafvMnnykLW9pjN1YihHEi04PQ")
    .then(response => response.json())
    .then(data => setTopVideoList(data.items))
    .catch(err => console.log(err))
  }, []);

  console.log(topVideoList);

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route 
            path="/" 
            element={<Videos topVideoList={topVideoList}/>} 
          />
          <Route 
            path="/components/detail" 
            element={<VideoDetail/>} 
          />
        </Routes>
        
      </BrowserRouter>
    </>
  )
});

export default App;
