import { Link } from "react-router-dom";

export default function Video(props) {
  const { topVideo } = props;
  return (
    <li className="video">
      <Link to='/components/detail' state={{ video: topVideo }}>
        <img 
          className="video__thumbnail" 
          src={topVideo.snippet.thumbnails.medium.url} 
          alt="video 이미지"
        />
        <div className="video__description">
          <h5 className="video__title">{topVideo.snippet.title}</h5>
          <span className="video__channel-title">{topVideo.snippet.channelTitle}</span>
        </div>
      </Link>
    </li>
  )
}