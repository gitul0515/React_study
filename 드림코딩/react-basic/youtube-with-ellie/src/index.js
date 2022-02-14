import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import Youtube from './service/youtube';

const youtubeAPI = new Youtube(process.env.REACT_APP_YOUTUBE_KEY);

ReactDOM.render(
  <React.StrictMode>
    <App youtubeAPI={youtubeAPI}/>
  </React.StrictMode>,
  document.getElementById('root')
);
