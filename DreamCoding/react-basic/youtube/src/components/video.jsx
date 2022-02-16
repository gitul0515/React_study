import { Link } from "react-router-dom";

export default function Video(props) {
  const { video } = props;
  return (
    <li className="video">
      <Link to='/components/video-content' state={{ video }}>
        <img 
          className="video__thumbnail" 
          src={video.snippet.thumbnails.medium.url} 
          alt="video 이미지"
        />
        <div className="video__title-container">
          <h5 className="video__title">{video.snippet.title}</h5>
          <span className="video__title-channel">{video.snippet.channelTitle}</span>
        </div>
      </Link>
    </li>
  )
}