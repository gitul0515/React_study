export default function Video(props) {
  const topVideo = props.topVideo;
  return (
    <li className="video">
      <a href="#sd">
        <img 
          className="video__img" 
          src={topVideo.snippet.thumbnails.medium.url} 
          alt="video 이미지"
        />
        <div className="video__description">
          <h5 className="video__title">{topVideo.snippet.title}</h5>
          <span className="video__author">{topVideo.snippet.channelTitle}</span>
        </div>
      </a>
    </li>
  )
}