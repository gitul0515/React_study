import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import Youtube from './service/youtube';

const httpClients = {
  baseURL: 'https://youtube.googleapis.com/youtube/v3',
  params: {
    key: process.env.REACT_APP_YOUTUBE_KEY
  }
};
const youtubeAPI = new Youtube(httpClients);

ReactDOM.render(
  <React.StrictMode>
    <App youtubeAPI={youtubeAPI}/>
  </React.StrictMode>,
  document.getElementById('root')
);
