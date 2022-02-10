export default function Video(props) {
  const topVideo = props.topVideo;
  return (
    <li className="video">
      <img className="video__img" src={topVideo.snippet.thumbnails.default.url} alt="" />
      <div className="video__description">
        <h4 className="video__title">{topVideo.snippet.title}</h4>
        <span className="author">{topVideo.snippet.channelTitle}</span>
      </div>
    </li>
  )
}