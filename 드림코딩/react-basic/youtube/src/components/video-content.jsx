import { useLocation } from "react-router-dom";

function VideoContent() {
  const { video } = useLocation().state;
  console.log(video);
  return (
    <article className="video-content">
      <iframe 
        className="video-content__player" title={video.id} 
        type="text/html" width="800" height="405"
        src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
        frameBorder="0" allow="autoplay" allowFullScreen>
      </iframe>
      <section className="video-content__description">
        
      </section>
    </article>
  )
}

export default VideoContent;