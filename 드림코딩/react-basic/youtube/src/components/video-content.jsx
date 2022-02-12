import { useLocation } from "react-router-dom";

function VideoContent() {
  const { video } = useLocation().state;
  console.log(video);
  return (
    <article>
      <iframe 
        className="video-content__player" title={video.id} 
        type="text/html" width="800" height="405"
        src={`https://www.youtube.com/embed/${video.id}`}
        frameBorder="0" allowFullScreen>
      </iframe>
      <section className="video-content__description">
        <h4 className="video-content__title">{video.snippet.title}</h4>
        <span className="video-content__title-channel">{video.snippet.channelTitle}</span>
        <span className="video-content__date">{video.snippet.publishedAt.slice(0, 10)}</span>
        <p className="video-content__text">{video.snippet.description}</p>
      </section>
    </article>
  )
}

export default VideoContent;