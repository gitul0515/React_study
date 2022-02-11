import { useLocation } from "react-router-dom";

function VideoContent() {
  const { video } = useLocation().state;
  console.log(video);
  return (
    <article>
      <iframe 
        className="video-content__player" title={video.id} 
        type="text/html" width="800" height="405"
        src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
        frameBorder="0" allow="autoplay" allowFullScreen>
      </iframe>
      <section className="video-content__description">
        <h1>hello</h1>
      </section>
    </article>
  )
}

export default VideoContent;